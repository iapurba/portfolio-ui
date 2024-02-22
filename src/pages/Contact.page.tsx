import Contact from "../components/Contact/Contact";
import profileData from "../data/profile.data";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";

interface ContactPageProps {
    id: string;
    isActive: boolean;
};

const ContactPage = forwardRef<HTMLDivElement, ContactPageProps>(
    ({ id, isActive }, ref) => {
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
            <div id={id} ref={ref}>
                <PageBuilder
                    id="contact-page-content"
                    title="Contact Me"
                    subtitle1="I Want To Hear From You"
                    children={contactComponent}
                    isActive={isActive}
                />
            </div>
        );
    });

export default ContactPage;