import Introduction from "../components/Introduction/Introduction";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";
import { useProfile } from "../context/ProfileContext";

const homePageStyle = {
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-cover.jpg)`,
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
        const { profileData } = useProfile();

        const introComponent = profileData && (
            <Introduction
                name={`${profileData.firstname} ${profileData.lastname}`}
                jobs={profileData.jobs}
                intro={profileData.intro}
                socialAccounts={profileData.socialAccounts}
                profileImageUrl={profileData.profileImageUrl}
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