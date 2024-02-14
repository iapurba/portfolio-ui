import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CutomButtonWrapper = styled(Button)(
    ({ className }) => ({
        borderRadius: "50px",
        color: className?.includes("primary")
            ? "#FFFFFF" : "#000000",
        padding: "8px 24px",
        border: "2px solid #F75023",
        fontSize: "14px",
        fontWeight: 'bold',
        textTransform: "initial",
        backgroundColor: className?.includes("primary")
            ? "#F75023" : "transparent",
        "&:hover": {
            color: className?.includes("primary")
                ? "#000000" : "#FFFFFF",
            borderColor: "2px solid #F75023",
            backgroundColor: className?.includes("primary")
                ? "transparent" : "#F75023",
        },
    })
);

export default CutomButtonWrapper;
