import About from "../components/About/About";
import profileData from "../data/profile.data";
import PageBuilder from "../common/PageBuilder/PageBuilder";

const AboutPage: React.FC = () => {

    const bio = profileData.bio;
    const aboutComponent = <About bio={bio} />;

    return (
        <PageBuilder
            id="about"
            children={aboutComponent}
        />
    );
};

export default AboutPage;