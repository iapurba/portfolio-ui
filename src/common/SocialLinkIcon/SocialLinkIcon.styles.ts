import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const CustomLink = styled(Link)({
    color: "inherit",
});

export const CustomFAIcon = styled(FontAwesomeIcon)({
    height: "16px",
    widows: "16px",
    padding: "6px",
    backgroundColor: "none",
    margin: "1px",
});

export const CustomFAIconContained = styled(FontAwesomeIcon)({
    height: "20px",
    widows: "20px",
    padding: "12px",
    // backgroundColor: "#E5E8E8",
    borderRadius: "20px",
    margin: "0 5px",
});
