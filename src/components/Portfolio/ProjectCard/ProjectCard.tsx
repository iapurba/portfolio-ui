import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import IconTextButton from '../../../common/IconTextButton/IconTextButton';
import { ProjectTitleText, ProjectCardWrapper, ProjectDetailsText } from './ProjectCard.styles';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    viewLiveUrl?: string;
    viewSourceCodeUrl?: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    viewLiveUrl,
    viewSourceCodeUrl,
    onClick
}) => {
    const handleLinkClick = (link: string): void => {
        window.open(link, '_blank');
    };

    return (
        <ProjectCardWrapper onClick={onClick}>
            <CardMedia
                component="img"
                alt="green iguana"
                height={"auto"}
                width={100}
                image={imageUrl}
            />
            <CardContent>
                <ProjectTitleText>{title}</ProjectTitleText>
                <ProjectDetailsText dangerouslySetInnerHTML={{ __html: description }} />
            </CardContent>
            <CardActions>
                <IconTextButton
                    startIcon={VisibilityRoundedIcon}
                    label='View Details'
                />
                {viewSourceCodeUrl &&
                    <IconTextButton
                        startIcon={CodeRoundedIcon}
                        label='Source Code'
                        onClick={() => handleLinkClick(viewSourceCodeUrl)}
                    />
                }
            </CardActions>
        </ProjectCardWrapper>
    );
}

export default ProjectCard;