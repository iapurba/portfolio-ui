import Contact from "../components/Contact/Contact";
import profileData from "../data/profile.data";
import PageBuilder from "../common/PageBuilder/PageBuilder";

const ContactPage: React.FC = () => {
    const ContactDetails = profileData.contactDetails;

    const submitContactForm = () => {
        console.log("submit contact form");
    };

    const contactComponent = (
        <Contact
            contactDetails={ContactDetails}
            onSubmit={submitContactForm}
        />
    );

    return (
        <PageBuilder
            id="contact"
            title="Contact Me"
            subtitle1="I Want To Hear From You"
            children={contactComponent}
        />
    );
};

export default ContactPage;