import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { styled } from "@mui/material/styles";

export const LocationIcon = styled(LocationOnRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#F75023",
        margin: 0,
        padding: "28px",
        backgroundColor: "#FEDFD7",
        borderRadius: "50px",
        fontSize: "30px",
    },
});

export const EmailIcon = styled(EmailRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#1CBE59",
        margin: 0,
        padding: "28px",
        backgroundColor: "#DDF5E6",
        borderRadius: "50px",
        fontSize: "30px",
    },
});

export const PhoneIcon = styled(LocalPhoneRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#8067F0",
        margin: 0,
        padding: "28px",
        backgroundColor: "#ECE8FD",
        borderRadius: "50px",
        fontSize: "30px",
    },
});


