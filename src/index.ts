import './index.css';

import { IconDotCircle, IconStar, IconText, IconUser } from '@codexteam/icons';
import { make } from '@editorjs/dom';
import type { API, BlockAPI, BlockTool, ToolConfig, SanitizerConfig } from '@editorjs/editorjs';

export interface MilestoneConfig extends ToolConfig {
  contentPlaceholder?: string;
  timePlaceholder?: string;
  peoplePlaceholder?: string;
  projectNamePlaceholder?: string;

  /**
   * 通用块查询回调（用于项目名称快速选择）
   */
  queryBlocks?: (params: {
    type: string;
    field?: string;
    q?: string;
    limit?: number;
  }) => Promise<{ items: Array<{ type: string; note_id: number; block_index: number; data: MilestoneData }> }>;

  /**
   * 获取系统人员列表（用于“相关人员”快速录入）
   */
  listPeople?: () => Promise<{ users: Array<{ id: number; label: string }> }>;
}

export interface MilestoneData {
  content: string;
  time: string;
  people: string;
  projectName: string;
}

interface MilestoneParams {
  data: MilestoneData;
  config?: MilestoneConfig;
  api: API;
  readOnly: boolean;
  block: BlockAPI;
}

type MilestoneField = keyof MilestoneData;

interface MilestoneCSS {
  wrapper: string;
  item: string;
  label: string;
  labelIcon: string;
  value: string;
  chipBtn: string;
  chooser: string;
  chooserHeader: string;
  chooserTitle: string;
  chooserSpacer: string;
  chooserInput: string;
  chooserClose: string;
  chooserList: string;
  chooserItem: string;
  chooserFooter: string;
  btn: string;
  btnPrimary: string;
  hint: string;
}

function toBrHtmlFromText(text: string): string {
  const t = typeof text === 'string' ? text : '';
  const trimmed = t.replace(/\r\n/g, '\n');
  if (!trimmed) return '';
  const escaped = trimmed
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/\n/g, '<br>');
}

function stripToText(el: HTMLElement): string {
  // innerText 会把 <br> 还原为换行，适合我们统一转换为 <br> 存储
  const t = (el && typeof (el as any).innerText === 'string') ? (el as any).innerText : '';
  return String(t || '').replace(/\u00A0/g, ' ').trim();
}

export default class Milestone implements BlockTool {
  private api: API;
  private readOnly: boolean;
  private block: BlockAPI;
  private config: MilestoneConfig;
  private data: MilestoneData;

  private css: MilestoneCSS = {
    wrapper: 'cdx-milestone',
    item: 'cdx-milestone__item',
    label: 'cdx-milestone__label',
    labelIcon: 'cdx-milestone__label-icon',
    value: 'cdx-milestone__value',
    chipBtn: 'cdx-milestone__chip-btn',
    chooser: 'cdx-milestone__chooser',
    chooserHeader: 'cdx-milestone__chooser-header',
    chooserTitle: 'cdx-milestone__chooser-title',
    chooserSpacer: 'cdx-milestone__chooser-spacer',
    chooserInput: 'cdx-milestone__chooser-input',
    chooserClose: 'cdx-milestone__chooser-close',
    chooserList: 'cdx-milestone__chooser-list',
    chooserItem: 'cdx-milestone__chooser-item',
    chooserFooter: 'cdx-milestone__chooser-footer',
    btn: 'cdx-milestone__btn',
    btnPrimary: 'primary',
    hint: 'cdx-milestone__hint',
  };

  private wrapper?: HTMLElement;
  private fieldEls: Map<MilestoneField, HTMLElement> = new Map();

  // chooser state
  private chooserEl?: HTMLElement;
  private chooserInputEl?: HTMLInputElement;
  private chooserListEl?: HTMLElement;
  private chooserTitleEl?: HTMLElement;
  private chooserFooterEl?: HTMLElement;
  private chooserHintEl?: HTMLElement;

  private chooserMode: 'people' | 'project' | null = null;
  private selectedPeople: Set<string> = new Set();
  private selectedProject: string | null = null;
  private lastChooserQueryTs = 0;

  static get toolbox() {
    return {
      title: 'Milestone',
      icon: IconStar,
    };
  }

  static get sanitize(): SanitizerConfig {
    return {
      content: { br: true },
      time: { br: true },
      people: { br: true },
      projectName: { br: true },
    };
  }

  constructor({ data, config, api, readOnly, block }: MilestoneParams) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;
    this.config = config || {};

    const safe = (v: any) => (typeof v === 'string' ? v : '');
    this.data = {
      content: safe(data && data.content),
      time: safe(data && data.time),
      people: safe(data && data.people),
      projectName: safe(data && data.projectName),
    };
  }

  render(): HTMLElement {
    const wrapper = make('div', [this.css.wrapper]) as HTMLElement;
    this.wrapper = wrapper;

    const makeLabel = (text: string, iconHtml: string) => {
      const label = make('div', [this.css.label]) as HTMLElement;
      const icon = make('span', [this.css.labelIcon]) as HTMLElement;
      icon.innerHTML = iconHtml;
      label.appendChild(icon);
      label.appendChild(document.createTextNode(text));
      return label;
    };

    const makeValue = (field: MilestoneField, placeholder: string) => {
      const v = make('div', [this.css.value]) as HTMLElement;
      v.dataset.field = field;
      v.contentEditable = (!this.readOnly).toString();
      v.setAttribute('data-placeholder', placeholder);
      v.innerHTML = this.data[field] || '';

      if (!this.readOnly) {
        v.addEventListener('input', () => {
          // 仅做轻量同步，最终以 save() 时读取为准
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (this.data as any)[field] = v.innerHTML;
        });
        v.addEventListener('blur', () => {
          const text = stripToText(v);
          (this.data as any)[field] = toBrHtmlFromText(text);
          v.innerHTML = (this.data as any)[field] || '';
        });
      }

      this.fieldEls.set(field, v);
      return v;
    };

    const placeholders = {
      content: this.api.i18n.t(this.config.contentPlaceholder || '节点内容'),
      time: this.api.i18n.t(this.config.timePlaceholder || '节点时间'),
      people: this.api.i18n.t(this.config.peoplePlaceholder || '相关人员'),
      projectName: this.api.i18n.t(this.config.projectNamePlaceholder || '项目名称'),
    };

    // content
    {
      const item = make('div', [this.css.item]) as HTMLElement;
      item.appendChild(makeLabel(this.api.i18n.t('内容'), IconText));
      item.appendChild(makeValue('content', placeholders.content));
      wrapper.appendChild(item);
    }

    // time
    {
      const item = make('div', [this.css.item]) as HTMLElement;
      item.appendChild(makeLabel(this.api.i18n.t('时间'), IconDotCircle));
      item.appendChild(makeValue('time', placeholders.time));
      wrapper.appendChild(item);
    }

    // people + quick button
    {
      const item = make('div', [this.css.item]) as HTMLElement;
      item.appendChild(makeLabel(this.api.i18n.t('人员'), IconUser));
      item.appendChild(makeValue('people', placeholders.people));
      if (!this.readOnly) {
        const btn = make('button', [this.css.chipBtn], {
          type: 'button',
        }) as HTMLButtonElement;
        btn.textContent = this.api.i18n.t('选择');
        btn.addEventListener('click', () => this.openPeopleChooser());
        item.appendChild(btn);
      }
      wrapper.appendChild(item);
    }

    // projectName + quick button
    {
      const item = make('div', [this.css.item]) as HTMLElement;
      item.appendChild(makeLabel(this.api.i18n.t('项目'), IconStar));
      item.appendChild(makeValue('projectName', placeholders.projectName));
      if (!this.readOnly) {
        const btn = make('button', [this.css.chipBtn], {
          type: 'button',
        }) as HTMLButtonElement;
        btn.textContent = this.api.i18n.t('选择');
        btn.addEventListener('click', () => this.openProjectChooser());
        item.appendChild(btn);
      }
      wrapper.appendChild(item);
    }

    if (!this.readOnly) {
      wrapper.appendChild(this.buildChooser());
      const hint = make('div', [this.css.hint]) as HTMLElement;
      hint.textContent = this.api.i18n.t('提示：人员可多选；项目名称来自历史 milestone 块的全局查询。');
      this.chooserHintEl = hint;
      wrapper.appendChild(hint);
    }

    return wrapper;
  }

  save(): MilestoneData {
    // 统一用当前 DOM 读取，避免 input 事件丢失导致旧值被保存
    const pick = (field: MilestoneField) => {
      const el = this.fieldEls.get(field);
      if (!el) return this.data[field] || '';
      const text = stripToText(el);
      return toBrHtmlFromText(text);
    };
    return {
      content: pick('content'),
      time: pick('time'),
      people: pick('people'),
      projectName: pick('projectName'),
    };
  }

  validate(savedData: MilestoneData): boolean {
    // 允许全空（用户可能只是插入占位块）
    if (!savedData || typeof savedData !== 'object') return false;
    return true;
  }

  private buildChooser(): HTMLElement {
    const chooser = make('div', [this.css.chooser]) as HTMLElement;
    this.chooserEl = chooser;

    const header = make('div', [this.css.chooserHeader]) as HTMLElement;
    const title = make('div', [this.css.chooserTitle]) as HTMLElement;
    title.textContent = this.api.i18n.t('选择');
    this.chooserTitleEl = title;

    const input = make('input', [this.css.chooserInput], {
      type: 'text',
      placeholder: this.api.i18n.t('搜索…'),
    }) as HTMLInputElement;
    this.chooserInputEl = input;
    input.addEventListener('input', () => {
      if (this.chooserMode === 'people') {
        this.renderPeopleList(this.getPeopleCache(), input.value);
      } else if (this.chooserMode === 'project') {
        void this.queryAndRenderProjects(input.value);
      }
    });

    const spacer = make('div', [this.css.chooserSpacer]) as HTMLElement;
    const close = make('button', [this.css.chooserClose], { type: 'button' }) as HTMLButtonElement;
    close.textContent = this.api.i18n.t('关闭');
    close.addEventListener('click', () => this.closeChooser());

    header.appendChild(title);
    header.appendChild(spacer);
    header.appendChild(input);
    header.appendChild(close);
    chooser.appendChild(header);

    const list = make('div', [this.css.chooserList]) as HTMLElement;
    this.chooserListEl = list;
    chooser.appendChild(list);

    const footer = make('div', [this.css.chooserFooter]) as HTMLElement;
    this.chooserFooterEl = footer;
    chooser.appendChild(footer);

    return chooser;
  }

  private openChooser(mode: 'people' | 'project') {
    if (!this.chooserEl || !this.chooserInputEl || !this.chooserListEl || !this.chooserTitleEl || !this.chooserFooterEl) {
      return;
    }
    this.chooserMode = mode;
    this.chooserEl.classList.add('is-open');

    this.chooserInputEl.value = '';
    this.chooserInputEl.focus();

    if (this.chooserHintEl) {
      this.chooserHintEl.style.display = mode === 'people' ? '' : 'none';
    }

    if (mode === 'people') {
      this.chooserTitleEl.textContent = this.api.i18n.t('选择相关人员');
      this.selectedPeople = this.parsePeopleToSet(this.save().people);
      this.selectedProject = null;
      this.renderPeopleFooter();
      void this.ensurePeopleLoaded();
    } else {
      this.chooserTitleEl.textContent = this.api.i18n.t('选择项目名称');
      this.selectedProject = this.getTextFieldValue('projectName');
      this.selectedPeople.clear();
      this.renderProjectFooter();
      void this.queryAndRenderProjects('');
    }
  }

  private closeChooser() {
    if (!this.chooserEl) return;
    this.chooserEl.classList.remove('is-open');
    this.chooserMode = null;
  }

  private openPeopleChooser() {
    this.openChooser('people');
  }

  private openProjectChooser() {
    this.openChooser('project');
  }

  private getTextFieldValue(field: MilestoneField): string {
    const el = this.fieldEls.get(field);
    if (!el) return '';
    return stripToText(el);
  }

  private setFieldFromText(field: MilestoneField, text: string) {
    const el = this.fieldEls.get(field);
    const html = toBrHtmlFromText(text);
    (this.data as any)[field] = html;
    if (el) {
      el.innerHTML = html;
    }
  }

  // ---- People ----
  private peopleCache: Array<{ id: number; label: string }> | null = null;
  private peopleLoading = false;

  private getPeopleCache() {
    return Array.isArray(this.peopleCache) ? this.peopleCache : [];
  }

  private async ensurePeopleLoaded() {
    if (this.peopleCache) {
      this.renderPeopleList(this.peopleCache, this.chooserInputEl ? this.chooserInputEl.value : '');
      return;
    }
    if (this.peopleLoading) return;
    this.peopleLoading = true;

    try {
      if (!this.config.listPeople) {
        this.peopleCache = [];
        this.renderPeopleList([], '');
        return;
      }
      const res = await this.config.listPeople();
      const users = res && Array.isArray(res.users) ? res.users : [];
      this.peopleCache = users
        .filter(u => u && typeof u.label === 'string')
        .map(u => ({ id: Number(u.id), label: String(u.label).trim() }))
        .filter(u => Number.isFinite(u.id) && u.label.length > 0);
      this.renderPeopleList(this.peopleCache, this.chooserInputEl ? this.chooserInputEl.value : '');
    } catch (e) {
      this.peopleCache = [];
      this.renderPeopleList([], '');
    } finally {
      this.peopleLoading = false;
    }
  }

  private renderPeopleFooter() {
    if (!this.chooserFooterEl) return;
    this.chooserFooterEl.innerHTML = '';

    const cancel = make('button', [this.css.btn], { type: 'button' }) as HTMLButtonElement;
    cancel.textContent = this.api.i18n.t('取消');
    cancel.addEventListener('click', () => this.closeChooser());

    const apply = make('button', [this.css.btn, this.css.btnPrimary], { type: 'button' }) as HTMLButtonElement;
    apply.textContent = this.api.i18n.t('应用');
    apply.addEventListener('click', () => {
      const list = Array.from(this.selectedPeople.values()).filter(Boolean);
      this.setFieldFromText('people', list.join('、'));
      this.closeChooser();
    });

    this.chooserFooterEl.appendChild(cancel);
    this.chooserFooterEl.appendChild(apply);
  }

  private renderPeopleList(users: Array<{ id: number; label: string }>, q: string) {
    if (!this.chooserListEl) return;
    const query = (q || '').trim().toLowerCase();

    const filtered = users.filter(u => {
      if (!query) return true;
      return (u.label || '').toLowerCase().includes(query);
    });

    this.chooserListEl.innerHTML = '';
    if (filtered.length === 0) {
      const empty = make('div', [this.css.hint]) as HTMLElement;
      empty.textContent = this.api.i18n.t('无可选人员');
      this.chooserListEl.appendChild(empty);
      return;
    }

    filtered.forEach(u => {
      const item = make('div', [this.css.chooserItem]) as HTMLElement;
      item.textContent = u.label;
      if (this.selectedPeople.has(u.label)) {
        item.classList.add('is-selected');
      }
      item.addEventListener('click', () => {
        if (this.selectedPeople.has(u.label)) {
          this.selectedPeople.delete(u.label);
          item.classList.remove('is-selected');
        } else {
          this.selectedPeople.add(u.label);
          item.classList.add('is-selected');
        }
      });
      this.chooserListEl!.appendChild(item);
    });
  }

  private parsePeopleToSet(htmlOrText: string): Set<string> {
    const raw = (htmlOrText || '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/&nbsp;/gi, ' ');
    const txt = raw.replace(/<[^>]+>/g, '');
    const parts = txt
      .split(/[,\n、;；]+/g)
      .map(s => s.trim())
      .filter(Boolean);
    return new Set(parts);
  }

  // ---- Project ----
  private renderProjectFooter() {
    if (!this.chooserFooterEl) return;
    this.chooserFooterEl.innerHTML = '';

    const close = make('button', [this.css.btn], { type: 'button' }) as HTMLButtonElement;
    close.textContent = this.api.i18n.t('关闭');
    close.addEventListener('click', () => this.closeChooser());
    this.chooserFooterEl.appendChild(close);
  }

  private async queryAndRenderProjects(q: string) {
    if (!this.chooserListEl) return;
    if (!this.config.queryBlocks) {
      this.chooserListEl.innerHTML = '';
      const empty = make('div', [this.css.hint]) as HTMLElement;
      empty.textContent = this.api.i18n.t('未配置项目查询接口');
      this.chooserListEl.appendChild(empty);
      return;
    }

    const now = Date.now();
    this.lastChooserQueryTs = now;
    const query = (q || '').trim();

    try {
      const res = await this.config.queryBlocks({
        type: 'milestone',
        field: 'projectName',
        q: query,
        limit: 200,
      });
      if (this.lastChooserQueryTs !== now) return;

      const items = res && Array.isArray(res.items) ? res.items : [];
      const names: string[] = [];
      const set = new Set<string>();

      items.forEach(it => {
        const v = it && it.data && typeof it.data.projectName === 'string' ? it.data.projectName : '';
        const text = v
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/&nbsp;/gi, ' ')
          .replace(/<[^>]+>/g, '')
          .trim();
        if (!text) return;
        if (set.has(text)) return;
        set.add(text);
        names.push(text);
      });

      this.renderProjectList(names, query);
    } catch (_) {
      if (this.lastChooserQueryTs !== now) return;
      this.renderProjectList([], query);
    }
  }

  private renderProjectList(names: string[], q: string) {
    if (!this.chooserListEl) return;
    const query = (q || '').trim().toLowerCase();
    const filtered = names.filter(n => {
      if (!query) return true;
      return n.toLowerCase().includes(query);
    });

    this.chooserListEl.innerHTML = '';
    if (filtered.length === 0) {
      const empty = make('div', [this.css.hint]) as HTMLElement;
      empty.textContent = this.api.i18n.t('无可选项目名称');
      this.chooserListEl.appendChild(empty);
      return;
    }

    filtered.forEach(name => {
      const item = make('div', [this.css.chooserItem]) as HTMLElement;
      item.textContent = name;
      if (this.selectedProject && this.selectedProject === name) {
        item.classList.add('is-selected');
      }
      item.addEventListener('click', () => {
        this.setFieldFromText('projectName', name);
        this.closeChooser();
      });
      this.chooserListEl!.appendChild(item);
    });
  }
}


