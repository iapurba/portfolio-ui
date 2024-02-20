import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
interface CustomAppBarProps {
    isScrolled?: boolean;
}

export const CustomAppBar = styled(AppBar)<CustomAppBarProps>(
    ({ theme, isScrolled }) => ({
        color: "#FFFFFF",
        position: "fixed",
        // boxShadow: "none",
        // backgroundColor: 'transparent',
        padding: "6px 0px",
        [theme.breakpoints.up('xs')]: {
            padding: '6px 0',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '12px 0',
        },
        zIndex: 1000,
        backgroundColor: isScrolled
            ? "#FFFFFF" : "transparent",
        transition: "background-color 0.5s ease",
        boxShadow: isScrolled ?
            "rgba(17, 17, 26, 0.1) 0px 1px 0px" : "none",
    })
);

export const AppHeaderContentWrapper = styled(Container)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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
