import Grid from "@mui/material/Grid";
import SkillList from "./SkillList";
import Box from "@mui/material/Box";
import profileData from "../../data/profile.data";
import WorkExperience from "./WorkExperience";
import EducationHistory from "./Education";
import Certifications from "./Certifications";

interface ResumeProps {

}

const Resume: React.FC<ResumeProps> = () => {
    const workExperience = profileData.workExperience;
    const skills = profileData.technicalSkills;
    const education = profileData.education;
    const certifications = profileData.certifications;
    return (
        <Box>
            <Grid container>
                <Grid item sm={12} md={6} p={1}>
                    <Box className="work-experience-box">
                        <WorkExperience experiences={workExperience} />
                    </Box>
                    <Box className="certifications-box" pt={2}>
                        <Certifications certList={certifications} />
                    </Box>
                </Grid>
                <Grid item sm={12} md={6} p={1}>
                    <Box className="technical-skills-box">
                        <SkillList skills={skills} />
                    </Box>
                    <Box className="education-history-box" pt={2}>
                        <EducationHistory educationHistory={education} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Resume;