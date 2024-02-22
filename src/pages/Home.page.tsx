import Introduction from "../components/Introduction/Introduction";
import profileData from "../data/profile.data";
import BG from "../assets/bg2.jpg";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";

const homePageStyle = {
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maring: 'auto'
};

interface HomePageProps {
    id: string;
    isActive: boolean;
    scrollIntoAbout: () => void;
}

const HomePage = forwardRef<HTMLDivElement, HomePageProps>(
    ({ id, isActive, scrollIntoAbout }, ref) => {

        const introComponent = (
            <Introduction
                name={profileData.name}
                jobs={profileData.jobs}
                intro={profileData.intro}
                onAboutMeClick={scrollIntoAbout}
            />
        );

        return (
            <div id={id} ref={ref}>
                <PageBuilder
                    id="home-page-content"
                    className="home-page"
                    sx={homePageStyle}
                    children={introComponent}
                    isActive={false}
                />
            </div>
        );
    });

export default HomePage;