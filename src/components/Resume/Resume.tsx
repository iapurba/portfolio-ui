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
} from "../../types/Resume.type";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Grid container className="resume-container">
            <Grid item xs={12} sm={12} md={6} p={1}>
                <Box className="work-experience-box">
                    <WorkExperience experiences={workExperiences} />
                </Box>
                {
                    certifications.length > 0 ? (
                        <Box className="certifications-box" pt={2}>
                            <Certifications certList={certifications} />
                        </Box>
                    ) : (
                        !isMobile && <Box className="education-history-box" pt={2}>
                            <EducationHistory educationHistory={educations} />
                        </Box>
                    )
                }

            </Grid>
            <Grid item xs={12} sm={12} md={6} p={1}>
                <Box className="technical-skills-box">
                    <SkillList skills={skills} />
                </Box>
                <Box className="education-history-box" pt={2}>
                    {((certifications.length > 0) || isMobile) &&
                        <EducationHistory educationHistory={educations} />
                    }
                </Box>
            </Grid>
        </Grid>
    )
};

export default Resume;