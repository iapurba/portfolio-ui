import Resume from "../components/Resume/Resume"
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef, useEffect, useState } from "react";
import { fetchResumeData } from "../services/portfolioService";
import { profileConstants } from "../utils/constants";
import ResumeType from "../types/Resume.type";
import { normalizeResumeData } from "../utils/helper";

interface ResumePageProps {
    id: string;
    isActive: boolean;
}

const ResumePage = forwardRef<HTMLDivElement, ResumePageProps>(
    ({ id, isActive }, ref) => {
        const [resumeData, setResumeData] = useState<ResumeType>();

        useEffect(() => {
            const getResumeData = async () => {
                try {
                    const response = await fetchResumeData(profileConstants.PROFILE_ID);
                    const normalizedData = normalizeResumeData(response.data);
                    setResumeData(normalizedData);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            getResumeData();
        }, [])

        const resumeComponent = resumeData && (
            <Resume
                workExperiences={resumeData.workExperiences}
                skills={resumeData.technicalSkills}
                educations={resumeData.educations}
                certifications={resumeData.certifications}
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