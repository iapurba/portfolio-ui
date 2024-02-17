import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface FilterMenuButtonProps {
    active: boolean;
    onClick?: () => void;
}

const RounderFilterButtonWrapper = styled(Button)<FilterMenuButtonProps>(
    ({ active }) => ({
        borderRadius: '100px',
        color: active ? '#FFFFFF' : '#000000',
        padding: '7px 15px',
        border: active ? '1px solid #8067F0' : '1px solid #ECE8FD',
        fontSize: '16px',
        fontWeight: '520',
        marginLeft: '12px',
        textTransform: 'initial',
        backgroundColor: active ? '#8067F0' : 'transparent',
        '&:hover': {
            borderColor: active ? '#ECE8FD' : '#ECE8FD',
            backgroundColor: active ? '#8067F0' : 'transparent',
        },
    }));

export { RounderFilterButtonWrapper };