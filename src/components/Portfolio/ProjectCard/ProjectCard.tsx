import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import IconTextButton from '../../../common/IconTextButton/IconTextButton';
import { ProjectTitleText, ProjectCardWrapper, ProjectDetailsText } from './ProjectCard.styles';
import loadBalancer from "../../../assets/loadbalancer.png";

interface ProjectCardProps {
    title: string;
    details: string;
    viewLiveUrl?: string;
    viewSourceCodeUrl?: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    details,
    viewLiveUrl,
    viewSourceCodeUrl,
    onClick
}) => {
    return (
        <ProjectCardWrapper onClick={onClick}>
            <CardMedia
                component="img"
                alt="green iguana"
                height={"auto"}
                width={100}
                image={loadBalancer}
            />
            <CardContent>
                <ProjectTitleText>{title}</ProjectTitleText>
                <ProjectDetailsText dangerouslySetInnerHTML={{ __html: details }} />
            </CardContent>
            <CardActions>
                <IconTextButton
                    startIcon={VisibilityRoundedIcon}
                    label='View Live'
                />
                <IconTextButton
                    startIcon={CodeRoundedIcon}
                    label='Source Code'
                />
            </CardActions>
        </ProjectCardWrapper>
    );
}

export default ProjectCard;