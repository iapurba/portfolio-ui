import About from "../components/About/About";
import profileData from "../data/profile.data";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";

interface AboutPageProps {
    id: string;
    isActive: boolean;
    scrollIntoContact: () => void;
}

const AboutPage = forwardRef<HTMLDivElement, AboutPageProps>(
    ({ id, isActive, scrollIntoContact }, ref) => {
        const bio = profileData.bio;

        const aboutComponent = (
            <About
                bio={bio}
                onHireMeClick={scrollIntoContact}
            />
        );

        return (
            <div id={id} ref={ref}>
                <PageBuilder
                    id="about-page-contect"
                    children={aboutComponent}
                    isActive={isActive}
                />
            </div>
        );
    });

export default AboutPage;