import Resume from "../components/Resume/Resume"
import profileData from "../data/profile.data";
import PageBuilder from "../common/PageBuilder/PageBuilder";


const ResumePage: React.FC = () => {

    const workExperiences = profileData.workExperience;
    const skills = profileData.technicalSkills;
    const educations = profileData.education;
    const certifications = profileData.certifications;

    const resumeComponent = (
        <Resume
            workExperiences={workExperiences}
            skills={skills}
            educations={educations}
            certifications={certifications}
        />
    );

    return (
        <PageBuilder
            id="resume"
            title="Resume"
            subtitle1="I Develop Skills Regularly To Keep Me Updated"
            children={resumeComponent}
        />
    );
};

export default ResumePage;