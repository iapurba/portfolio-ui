import { Grid, Toolbar } from "@mui/material";
import FilterButton from "../../common/FilterButton/FilterButton";
import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectType } from "../../types/Project.type";
import ProjectDetailsModal from "./ProjectDetails/ProjectDetailView";

interface PortFolioProps {
    tabs: string[];
    projects: ProjectType[];
}

const Portfolio: React.FC<PortFolioProps> = ({ tabs, projects }) => {
    const [selectedTab, setSelectedTab] = useState<string>("All");
    const [filteredProjects, setFilteredProjects] =
        useState<ProjectType[]>(projects);
    const [detailView, setDetailView] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filterProjectByTool = (tab: string) => {
        if (tab === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) => project.tools.includes(tab));
            setFilteredProjects(filtered);
        }
        setSelectedTab(tab);
    };

    return (
        <div className="portfolio-details-container">
            {detailView ? (
                <ProjectDetailsModal
                    title={selectedProject?.title}
                    description={selectedProject?.description}
                    onClose={() => {
                        setDetailView(false);
                    }}
                    imageUrl={selectedProject?.imageUrl}
                />
            ) : (
                <>
                    <Toolbar
                        sx={{
                            display: "flex",
                            flexDirection: { md: "row" },
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "10px",
                        }}
                    >
                        {tabs.map((tab: string, index: number) => (
                            <FilterButton
                                key={index}
                                label={tab}
                                active={selectedTab === tab ? true : false}
                                onClick={() => filterProjectByTool(tab)}
                            />
                        ))}
                    </Toolbar>
                    <Grid container justifyContent={"center"}>
                        {filteredProjects.map((project) => (
                            <Grid item xs={12} sm={12} md={4} p={1} key={project._id}>
                                <ProjectCard
                                    title={project?.title}
                                    description={project?.description}
                                    imageUrl={project.imageUrl}
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setDetailView(true);
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
};

export default Portfolio;
