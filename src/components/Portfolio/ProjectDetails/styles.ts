import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export const ProjectDetailBoxWrapper = styled(Box)`
  background-color: #ffffff;
  width: 60%;
  max-height: 90%;
  overflow-y: auto;
  margin: auto;
  box-shadow: none;
  border: 1px solid #d6dbe5;
  border-radius: 12px;
  position: relative;

  @media (max-width: 600px) {
    /* For xs screens and below */
    width: 100%;
  }
`;

export const ProjectDetailContent = styled(CardContent)`
    padding: 24px 24px 0;

    @media (max-width: 600px) {  /* For xs screens and below */
        width: padding: 16px 16px 0;
    }
`;

export const ProjectDetailFooter = styled(CardActions)`
    padding: 10px 24px 20px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {  /* For xs screens and below */
        width: padding: 10px 16px 20px;
        display: block;
        display: grid;
        justify-content: flex-end;
    }
`;

export const CloseButton = styled("div")({
    position: "absolute",
    top: "16px",
    right: "16px",
    cursor: "pointer",
});

export const CloseIcon = styled(CloseRoundedIcon)({
    "&.MuiSvgIcon-root": {
        color: "#ffffff",
        fontSize: "24px",
        padding: "4px",
        backgroundColor: "grey",
        borderRadius: "12px",
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 
        0px -2px 6px 0px inset`,
    },
    "&.MuiSvgIcon-root: hover": {
        backgroundColor: "rgb(194, 0, 0)",
    },
});
