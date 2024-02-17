import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import About from "../components/About/About";
import profileData from "../data/profile.data";

const AboutPage = () => {
    const bio = profileData.bio;

    return (
        <Container id="about_page" sx={{ padding: '50px 0' }}>
            <Box sx={{ marginTop: "30px", marginBottom: '80px' }}>
                <About bio={bio} />
            </Box>
        </Container>
    )
};

export default AboutPage;