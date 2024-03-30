import { ProjectType } from "../types/Project.type";

export const normalizeProjectData = (data: any): ProjectType[] => {
    if (!Array.isArray(data))
        return [];

    return data.map((item) => ({
        _id: item?._id ?? "",
        projectId: item?.projectId ?? "",
        title: item?.title ?? "",
        description: item?.description ?? "",
        tools: item?.tools ?? [],
        imageUrl: item?.imageUrl ?? "",
        sourceCodeUrl: item?.sourceCodeUrl ?? "",
        liveUrl: item?.liveUrl ?? "",
    }))
};

export const getDistinctProjectTabs = (projects: ProjectType[]) => {
    const distinctTools: string[] = Array.from(
        new Set(projects.flatMap(project => project.tools))
    ).sort();
    return ['All', ...distinctTools];
}