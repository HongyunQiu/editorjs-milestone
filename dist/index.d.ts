import { API, BlockAPI, BlockTool, ToolConfig, SanitizerConfig } from '@editorjs/editorjs';

export interface MilestoneUserLabel {
    id: number;
    label: string;
}
export interface MilestoneConfig extends ToolConfig {
    contentPlaceholder?: string;
    startTimePlaceholder?: string;
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
    }) => Promise<{
        items: Array<{
            type: string;
            note_id: number;
            block_index: number;
            data: MilestoneData;
        }>;
    }>;
    /**
     * 获取系统人员列表（用于“相关人员”快速录入）
     */
    listPeople?: () => Promise<{
        users: Array<{
            id: number;
            label: string;
        }>;
    }>;
    /**
     * 获取当前登录用户（用于“创建人/确认人/已完成权限控制”）
     * - label: 用户展示名（通常为 full_name）
     */
    getCurrentUser?: () => MilestoneUserLabel | null;
}
export interface MilestoneData {
    content: string;
    /**
     * 项目开始时间（YYYY-MM-DD）
     */
    startTime?: string;
    /**
     * 项目节点时间（YYYY-MM-DD）
     */
    time: string;
    people: string;
    projectName: string;
    completed?: boolean;
    /**
     * 里程碑创建人：由工具自动写入，不允许手工编辑
     */
    creator?: MilestoneUserLabel;
    /**
     * 里程碑确认人：可多选；仅创建人可修改
     * - 只有 confirmers 中包含的人员，才有权限勾选“已完成”
     */
    confirmers?: MilestoneUserLabel[];
}
interface MilestoneParams {
    data: MilestoneData;
    config?: MilestoneConfig;
    api: API;
    readOnly: boolean;
    block: BlockAPI;
}
export default class Milestone implements BlockTool {
    private api;
    private readOnly;
    private block;
    private config;
    private data;
    /**
     * Editor.js 只读模式支持声明：
     * - Editor.js 在切换 readOnly 时会校验“所有已连接工具”是否支持只读
     * - 若未声明，将导致 `To enable read-only mode... Tools milestone don't support read-only mode.`
     */
    static get isReadOnlySupported(): boolean;
    private css;
    private wrapper?;
    private fieldEls;
    private timePickerInput?;
    private peopleBtn?;
    private projectBtn?;
    private confirmersBtn?;
    private confirmersValueEl?;
    private creatorValueEl?;
    private completedCheckboxEl?;
    private chooserEl?;
    private chooserInputEl?;
    private chooserListEl?;
    private chooserTitleEl?;
    private chooserFooterEl?;
    private chooserMode;
    private selectedPeople;
    private selectedProject;
    private selectedConfirmers;
    private lastChooserQueryTs;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    static get sanitize(): SanitizerConfig;
    constructor({ data, config, api, readOnly, block }: MilestoneParams);
    render(): HTMLElement;
    save(): MilestoneData;
    validate(savedData: MilestoneData): boolean;
    private buildChooser;
    private openChooser;
    private adjustChooserPosition;
    private closeChooser;
    /**
     * 根据日期差值更新组件整体颜色状态
     */
    private updateUrgency;
    private updateBtnStates;
    private openPeopleChooser;
    private openProjectChooser;
    private openConfirmersChooser;
    private getCurrentUser;
    private getTextFieldValue;
    private setFieldFromText;
    /**
     * 仅当“开始时间”和“节点时间”都填写且格式合法时，校验节点时间 >= 开始时间
     * 不满足则将节点时间标红（不影响开始时间本身的格式错误样式）
     */
    private updateDateConsistency;
    private peopleCache;
    private peopleLoading;
    private getPeopleCache;
    private ensurePeopleLoaded;
    private renderPeopleFooter;
    private ensurePeopleLoadedForConfirmers;
    private renderConfirmersFooter;
    private renderPeopleList;
    private renderConfirmersList;
    private parsePeopleToSet;
    private refreshConfirmersValueUI;
    private canToggleCompleted;
    private refreshCompletedPermissionUI;
    private renderProjectFooter;
    private queryAndRenderProjects;
    private renderProjectList;
}
export {};
