import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


export const IconTextButtonWrapper = styled(Button)({
    borderRadius: '50px',
    color: '#8067F0',
    padding: '8px 15px',
    fontWeight: '600',
    fontSize: '13px',
    textTransform: 'initial',
    '&:hover': {
        backgroundColor: 'transparent',
    }
});