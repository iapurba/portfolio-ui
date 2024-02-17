export type ProjectTag = 
'aws' | 'cicd' | 'kubernetes' | 'terraform'| 'python' | 'monitoring' | 'all';

export interface ProjectType {
    title: string;
    tags: ProjectTag[];
    details: string;
};

export interface TabItem {
    label: string;
    value: ProjectTag;
}