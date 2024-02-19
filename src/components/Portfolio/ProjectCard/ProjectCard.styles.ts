import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const ProjectCardWrapper = styled(Card)({
    boxShadow: 'none',
    border: '1px solid #d6dbe5',
    borderRadius: '12px',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    },
});

export const ProjectCardFooter = styled(Box)({
    display: 'flex',
    justifyContent: 'left',
    backgroundColor: '#ECE8FD',
    padding: '3px',
    fontWeight: 'bold',
    borderRadius: '12px',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'Inter, sans-serif',
});

export const ProjectTitleText = styled(Typography)`
    font-size: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProjectDetailsText = styled(Typography)`
    font-size: 14px;
    color: #00000099;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;