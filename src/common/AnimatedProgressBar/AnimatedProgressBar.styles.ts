import { linearProgressClasses } from "@mui/material/LinearProgress";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import { styled } from "@mui/material/styles";

export const CustomLinearProgress = styled(LinearProgress)(
    ({ theme }) => ({
        height: 6,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "#ECE8FD",
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === "light"
                ? "#8067F0" : "green",
            transition: "width 0.5s ease-in-out",
        },
    })
);
