import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const AppHeaderWrapper = styled(AppBar)({
    color: "#FFFFFF",
    padding: "0 120px",
    position: "fixed",
    boxShadow: "none",
    backgroundColor: '#F7F9F9',
});

export const AppHeaderContentWrapper = styled("div")({
    display: "flex",
    flexDirection: "row",
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
