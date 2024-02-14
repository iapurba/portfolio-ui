import Container from "@mui/material/Container"
import Introduction from "../components/Introduction/Introduction";
import Box from "@mui/material/Box";
import profileData from "../data/profile.data";

const HomePage = () => {
    return (
        <Box sx={{
            backgroundColor: '#F7F9F9',
            height: '100vh',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Container sx={{ margin: 'auto', }}>
                <Introduction
                    name={profileData.name}
                    jobs={profileData.jobs}
                    intro={profileData.intro}
                 />
            </Container>
        </Box>
    )
};

export default HomePage;