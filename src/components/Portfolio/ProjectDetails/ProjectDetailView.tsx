import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography } from '@mui/material';
import IconTextButton from '../../../common/IconTextButton/IconTextButton';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { CloseButton, CloseIcon, ProjectDetailBoxWrapper, ProjectDetailContent, ProjectDetailFooter } from './styles';


interface ProjectDetailViewProps {
    onClose: () => void;
    title: string;
    description: string;
    imageUrl: string;
    viewLiveUrl?: string;
    viewSourceCodeUrl?: string;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
    onClose,
    title,
    description,
    imageUrl,
    viewLiveUrl,
    viewSourceCodeUrl
}) => {

    const handleClose = () => {
        onClose();
    };

    const handleLinkClick = (link: string): void => {
        window.open(link, '_blank');
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
                    image={imageUrl}
                />
                <ProjectDetailContent>
                    <Typography fontSize={"24px"}>{title}</Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: description }} />
                </ProjectDetailContent>
                <ProjectDetailFooter>
                    <Box>
                        {viewLiveUrl &&
                            <IconTextButton
                                startIcon={VisibilityRoundedIcon}
                                label='Live Preview'
                                onClick={() => handleLinkClick(viewLiveUrl)}
                            />
                        }
                        {viewSourceCodeUrl &&
                            <IconTextButton
                                startIcon={CodeRoundedIcon}
                                label='Source Code'
                                onClick={() => handleLinkClick(viewSourceCodeUrl)}
                            />
                        }
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
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