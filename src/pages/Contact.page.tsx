import Container from "@mui/material/Container"
import PageHeader from "../common/PageHeader/PageHeader";
import Box from "@mui/material/Box";
import Contact from "../components/Contact/Contact";
import profileData from "../data/profile.data";

const ContactPage = () => {
    const ContactDetails = profileData.contactDetails;

    const submitContactForm = () => {

    };

    return (
        <Container sx={{padding: '50px 0' }}>
            <PageHeader
                title="Contact Me"
                subtitle1="I Want To Hear From You"
            />
            <Box sx={{ marginTop: "30px", marginBottom: '80px' }}>
                <Contact
                    contactDetails={ContactDetails}
                    onSubmit={submitContactForm}
                 />
            </Box>

        </Container>
    )
};

export default ContactPage;