import { Typography, Box } from "@mui/material";
import {
    CustomBox, CustomHeader,
    ResumeContentHeaderWrapper,
    ResumeContentWrapper, SkillIcon
} from "./styles";
import AnimatedProgressBar from "../../common/AnimatedProgressBar/AnimatedProgressBar";

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
                        <AnimatedProgressBar
                            percentage={(skill.rating / 10) * 100}
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
