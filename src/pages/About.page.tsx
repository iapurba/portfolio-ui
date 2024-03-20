import About from "../components/About/About";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";
import { useProfile } from "../context/ProfileContext";

interface AboutPageProps {
    id: string;
    isActive: boolean;
    scrollIntoContact: () => void;
}

const AboutPage = forwardRef<HTMLDivElement, AboutPageProps>(
    ({ id, isActive, scrollIntoContact }, ref) => {
        const { profileData } = useProfile();

        const handleDownloadCV = (link: string) => {
            window.open(link, '_blank');
        };

        const aboutComponent = (
            profileData?.bio &&
            <About
                bio={profileData.bio}
                bioImageUrl={profileData.bioImageUrl}
                onHireMeClick={scrollIntoContact}
                onDownloadCvClick={() => handleDownloadCV(profileData.downloadCvUrl)}
            />
        );

        return (
            <div id={id} ref={ref}>
                <PageBuilder
                    id="about-page-contect"
                    children={aboutComponent}
                    isActive={true}
                />
            </div>
        );
    });

export default AboutPage;