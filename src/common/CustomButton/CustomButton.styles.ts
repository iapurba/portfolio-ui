import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const determineBackgroundColor = (className: string | null) => {
    if (className?.includes("orange")) {
        return "#F75023";
    } else if (className?.includes("green")) {
        return "#1CBE59";
    } else if (className?.includes("purple")) {
        return "#8067F0";
    } else {
        return "#F75023";
    }
};

const CutomButtonWrapper = styled(Button)(
    ({ className }) => ({
        borderRadius: "50px",
        color: className?.includes("contained")
            ? "#FFFFFF" : "#000000",
        padding: "8px 24px",
        border: `2px solid ${determineBackgroundColor(className ?? null)}`,
        fontSize: "14px",
        fontWeight: 'bold',
        textTransform: "initial",
        backgroundColor: className?.includes("contained")
            ? determineBackgroundColor(className ?? null) : "transparent",
        "&:hover": {
            color: className?.includes("contained")
                ? "#000000" : "#FFFFFF",
            borderColor: `2px solid ${determineBackgroundColor(className ?? null)}`,
            backgroundColor: className?.includes("contained")
                ? "transparent" : determineBackgroundColor(className ?? null),
        },
    })
);

export default CutomButtonWrapper;
