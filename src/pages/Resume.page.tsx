import Resume from "../components/Resume/Resume"
import profileData from "../data/profile.data";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";

interface ResumePageProps {
    id: string;
    isActive: boolean;
}

const ResumePage = forwardRef<HTMLDivElement, ResumePageProps>(
    ({ id, isActive }, ref) => {

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
        <div id={id} ref={ref}>
            <PageBuilder
                id="resume-page-content"
                title="Resume"
                subtitle1="I Develop Skills Regularly To Keep Me Updated"
                children={resumeComponent}
                isActive={isActive}
            />
        </div>
    );
});

export default ResumePage;