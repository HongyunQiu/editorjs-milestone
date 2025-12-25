import { API, BlockAPI, BlockTool, ToolConfig, SanitizerConfig } from '@editorjs/editorjs';

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
export default class Milestone implements BlockTool {
    private api;
    private readOnly;
    private block;
    private config;
    private data;
    private css;
    private wrapper?;
    private fieldEls;
    private chooserEl?;
    private chooserInputEl?;
    private chooserListEl?;
    private chooserTitleEl?;
    private chooserFooterEl?;
    private chooserHintEl?;
    private chooserMode;
    private selectedPeople;
    private selectedProject;
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
    private closeChooser;
    private openPeopleChooser;
    private openProjectChooser;
    private getTextFieldValue;
    private setFieldFromText;
    private peopleCache;
    private peopleLoading;
    private getPeopleCache;
    private ensurePeopleLoaded;
    private renderPeopleFooter;
    private renderPeopleList;
    private parsePeopleToSet;
    private renderProjectFooter;
    private queryAndRenderProjects;
    private renderProjectList;
}
export {};
