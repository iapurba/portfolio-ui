import React from "react";
import { Typography, Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { styled, keyframes } from "@mui/material/styles";
import { CustomBox, CustomHeader, ResumeContentHeaderWrapper, ResumeContentWrapper, SkillIcon } from "./styles";

// Define custom keyframes for animation
const customAnimation = keyframes`
    0% {
        background-color: #8067F0; /* starting color */
        width: 0%;
    }
    100% {
        background-color: #8067F0; /* ending color */
        width: 100%;
    }
`;

// Create a styled component for LinearProgress
const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    "& .MuiLinearProgress-bar": {
        borderRadius: 5, // Set border radius
        animation: `${customAnimation} 2s linear forwards`, // Apply custom animation
    },
    "&.MuiLinearProgress-colorPrimary .MuiLinearProgress-bar": {
        backgroundColor: "#8067F0", // Custom color for progress bar
    },
    "&.MuiLinearProgress-colorSecondary .MuiLinearProgress-bar": {
        backgroundColor: "#8067F0", // Custom color for progress bar
    },
}));

interface Skill {
    name: string;
    rating: number; // Should be between 1 and 10
}

interface SkillListProps {
    skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
    return (
        <ResumeContentWrapper className="skills-cntainer">
            <ResumeContentHeaderWrapper>
                <SkillIcon />
                <CustomHeader>Technical Skills</CustomHeader>
            </ResumeContentHeaderWrapper>
            <CustomBox>
                {skills.map((skill, index) => (
                    <Box key={index}>
                        <Typography variant="subtitle1">
                            {skill.name}
                        </Typography>
                        <CustomLinearProgress
                            sx={{
                                height: 6,
                                borderRadius: 5,
                            }}
                            // color={skill.rating > 8 ? "success" : "secondary"}
                            variant="determinate"
                            value={(skill.rating / 10) * 100}
                        />
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "right" }}
                        >
                            {`${skill.rating * 10}%`}
                        </Typography>
                    </Box>
                ))}
            </CustomBox>
        </ResumeContentWrapper>
    );
};

export default SkillList;
