import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        padding: "0px 15px",
        borderRadius: "12px",
        "& fieldset": {
            borderColor: "#d6dbe5",
            borderWidth: "1px",
        },
        "&:hover fieldset": {
            borderColor: "#d6dbe5", // Override border color on hover
        },
        "&.Mui-focused fieldset": {
            borderColor: "#d6dbe5", // Override border color on focus
            borderWidth: "1px",
        },
    },
    "& .MuiInputBase-input": {
        fontSize: "18px",
        color: "#000000",
        fontWeight: "540",
    },
    "& .MuiInputBase-inputMultiline": {
        padding: "16.5px 14px",
    },
});
