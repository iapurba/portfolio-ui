import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography } from '@mui/material';
import IconTextButton from '../../../common/IconTextButton/IconTextButton';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import loadBalancer from "../../../assets/loadbalancer.png";
import { CloseButton, CloseIcon, ProjectDetailBoxWrapper, ProjectDetailContent, ProjectDetailFooter } from './styles';


interface ProjectDetailViewProps {
    onClose: () => void;
    title: string;
    details: string;
    image?: any;
    viewLiveUrl?: string;
    viewSourceCodeUrl?: string;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
    onClose,
    title,
    details,
    image,
    viewLiveUrl,
    viewSourceCodeUrl
}) => {

    const handleClose = () => {
        onClose();
    };

    return (
        <Box>
            <ProjectDetailBoxWrapper>
                <CloseButton onClick={handleClose}>
                    <CloseIcon />
                </CloseButton>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height={"auto"}
                    width={100}
                    image={loadBalancer}
                />
                <ProjectDetailContent>
                    <Typography fontSize={"24px"}>{title}</Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: details }} />
                </ProjectDetailContent>
                <ProjectDetailFooter>
                    <Box>
                        {viewLiveUrl &&
                            <IconTextButton
                                startIcon={VisibilityRoundedIcon}
                                label='Preview'
                            />
                        }
                        <IconTextButton
                            startIcon={CodeRoundedIcon}
                            label='Source Code'
                        />
                    </Box>
                    <Box>
                        <IconTextButton
                            startIcon={ChevronLeftIcon}
                            label='Go Back'
                            onClick={handleClose}
                        />
                    </Box>
                </ProjectDetailFooter>
            </ProjectDetailBoxWrapper>
        </Box>
    );
};

export default ProjectDetailView;