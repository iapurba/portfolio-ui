import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface FilterMenuButtonProps {
    isActive: boolean;
    onClick?: () => void;
}

const RounderFilterButtonWrapper = styled(Button)<FilterMenuButtonProps>(
    ({ isActive }) => ({
        borderRadius: '100px',
        color: isActive ? '#FFFFFF' : '#000000',
        padding: '7px 15px',
        border: isActive ? '1px solid #8067F0' : '1px solid #ECE8FD',
        fontSize: '16px',
        fontWeight: '520',
        marginLeft: '12px',
        textTransform: 'initial',
        backgroundColor: isActive ? '#8067F0' : 'transparent',
        '&:hover': {
            borderColor: isActive ? '#ECE8FD' : '#ECE8FD',
            backgroundColor: isActive ? '#8067F0' : 'transparent',
        },
    }));

export { RounderFilterButtonWrapper };