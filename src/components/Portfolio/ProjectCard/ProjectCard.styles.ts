import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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

export const PrimaryEventCardText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    color: '#45474D',
    margin: theme.spacing(0, 1),
}));