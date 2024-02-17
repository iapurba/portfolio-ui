import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import IconTextButton from '../../../common/IconTextButton/IconTextButton';
import { ProjectCardWrapper } from './ProjectCard.styles';
import loadBalancer from "../../../assets/loadbalancer.png";
import { formatToEllipsisText } from '../../../utils/textFormatUtils';

interface ProjectCardProps {
    title: string;
    details: string;
    viewLiveUrl?: string;
    viewSourceCodeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    details,
    viewLiveUrl,
    viewSourceCodeUrl,
}) => {
    return (
        <ProjectCardWrapper>
            <CardMedia
                component="img"
                alt="green iguana"
                height={"auto"}
                width={100}
                image={loadBalancer}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {formatToEllipsisText(title, 57)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {formatToEllipsisText(details, 210)}
                </Typography>
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