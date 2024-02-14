import { Grid, Toolbar } from '@mui/material';
import FilterButton from '../../common/FilterButton/FilterButton';
import { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

interface TabItem {
    label: string;
    value: string;
}

interface PortFolioProps {
    tabs: TabItem[];
    projectList: any[];
}

const Portfolio: React.FC<PortFolioProps> = ({
    tabs,
    projectList
}) => {
    const [selectedItem, setSelectedItem] = useState<string>('all')
    return (
        <div className='portfolio-details-container'>
            <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {tabs.map((tab: TabItem, index: number) => (
                    <FilterButton
                        label={tab.label}
                        isActive={selectedItem === tab.value ? true : false}
                        onClick={() => (setSelectedItem(tab.value))}
                    />
                ))}
            </Toolbar>
            <Grid container justifyContent={"center"}>
                {projectList.map((project, i) => (
                    <Grid item xs={12} sm={12} md={4} p={1}>
                        <ProjectCard
                            key={i}
                            name={project?.name}
                            details={project?.details}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Portfolio;