import Grid from "@mui/material/Grid";
import SkillList from "./SkillList";
import Box from "@mui/material/Box";
import WorkExperience from "./WorkExperience";
import EducationHistory from "./Education";
import Certifications from "./Certifications";
import {
    CertificationType,
    EducationType,
    TechnicalSkillType,
    WorkExperienceType
} from "../../types/Profile.type";

interface ResumeProps {
    workExperiences: WorkExperienceType[];
    skills: TechnicalSkillType[];
    educations: EducationType[];
    certifications: CertificationType[];
}

const Resume: React.FC<ResumeProps> = ({
    workExperiences,
    skills,
    educations,
    certifications,
}) => {
    return (
        <Grid container className="resume-container">
            <Grid item sm={12} md={6} p={1}>
                <Box className="work-experience-box">
                    <WorkExperience experiences={workExperiences} />
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
                    <EducationHistory educationHistory={educations} />
                </Box>
            </Grid>
        </Grid>
    )
};

export default Resume;