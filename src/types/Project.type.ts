export interface ProjectType {
    _id: string;
    projectId: string;
    title: string;
    tools: [string];
    description: string;
    imageUrl: string;
    sourceCodeUrl: string;
    liveUrl: string;
};

export interface TabItemType {
    label: string;
    value: string;
}