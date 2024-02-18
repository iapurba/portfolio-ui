import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const ResumeContentWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    border: "1px solid #d6dbe5",
    borderRadius: "12px",
    padding: "18px",
});

export const ResumeContentHeaderWrapper = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "1px solid #d6dbe5",
    padding: "0px 8px 16px",
});

export const CustomHeader = styled(Typography)({
    fontSize: "24px",
    fontWeight: "530",
});

export const CustomBox = styled(Box)({
    padding: "6px 16px",
    margin: "16px 0px",
});

export const CustomChildBox = styled(Box)(({ className }) => ({
    paddingTop: className?.includes("first") ? "0" : "16px",
    paddingBottom: className?.includes("last") ? "0" : "16px",
    borderBottom: className?.includes("last") ? "none" : "1px solid #d6dbe5",
}));

export const OfficeIcon = styled(CorporateFareRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#00000099",
        marginRight: "10px",
        fontSize: "28px",
    },
});

export const CertificateIcon = styled(WorkspacePremiumRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#00000099",
        marginRight: "10px",
        fontSize: "28px",
    },
});

export const SchoolIcon = styled(SchoolRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#00000099",
        marginRight: "10px",
        fontSize: "28px",
    },
});

export const SkillIcon = styled(SettingsOutlinedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#00000099",
        marginRight: "10px",
        fontSize: "28px",
    },
});

