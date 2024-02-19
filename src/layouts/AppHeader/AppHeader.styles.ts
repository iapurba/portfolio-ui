import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const CustomAppBar = styled(AppBar)({
    color: "#FFFFFF",
    position: "fixed",
    boxShadow: "none",
    backgroundColor: 'transparent',
});

export const AppHeaderContentWrapper = styled(Container)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    zIndex: 9999,
});

export const MenuLink = styled(Link)({
    padding: "12px 16px",
    color: "#000000",
    fontWeight: '500',
    alignItems: "center",
    "&:hover": {
        color: "#F75023",
    },
});

export const HamburgerIcon = styled(MenuRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#000000",
        fontSize: "40px",
    },
});

export const CloseIcon = styled(CloseRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#000000",
        fontSize: "40px",
    },
});
