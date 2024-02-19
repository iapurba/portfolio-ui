import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CardContent from '@mui/material/CardContent';

export const ProjectDetailBoxWrapper = styled(Box)`
    background-color: #FFFFFF;
    width: 60%;
    max-height: 90%;
    overflow-y: auto;
    margin: auto;
    box-shadow: none;
    border: 1px solid #d6dbe5;
    border-radius: 12px;
    position: relative;
`;

export const ProjectDetailContent = styled(CardContent)`
    padding: 20px 20px 0;
`;

export const CloseButton = styled('div')({
    position: 'absolute',
    top: '16px',
    right: '16px',
    cursor: 'pointer',
});

export const CloseIcon = styled(CloseRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#ffffff",
        fontSize: "30px",
        padding: "3px",
        backgroundColor: "grey",
        borderRadius: "12px",
    },
    "&.MuiSvgIcon-root: hover": {
        backgroundColor: "red",
    },
});