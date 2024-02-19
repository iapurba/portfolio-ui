import Introduction from "../components/Introduction/Introduction";
import profileData from "../data/profile.data";
import BG from "../assets/bg2.jpg";
import PageBuilder from "../common/PageBuilder/PageBuilder";

const HomePage: React.FC = () => {

    const introComponent = (
        <Introduction
            name={profileData.name}
            jobs={profileData.jobs}
            intro={profileData.intro}
        />
    );

    const customStyles = {
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maring: 'auto'
    };

    return (
        <PageBuilder
            id="home"
            className="home-page"
            sx={customStyles}
            children={introComponent}
        />
    );
};

export default HomePage;