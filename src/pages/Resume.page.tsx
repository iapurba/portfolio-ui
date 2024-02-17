import Container from "@mui/material/Container"
import Resume from "../components/Resume/Resume"
import PageHeader from "../common/PageHeader/PageHeader";
import Box from "@mui/material/Box";

const ResumePage = () => {
    return (
        <Container sx={{minHeight: '100vh', padding: '50px 0'}}>
            <PageHeader
                title="Resume"
                subtitle1="I Develop Skills Regularly To Keep Me Updated"
            />
            <Box sx={{ marginTop: "30px", marginBottom: '80px' }}>
                <Resume />
            </Box>
        </Container>
    )
};

export default ResumePage;