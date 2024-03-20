import Contact from "../components/Contact/Contact";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";
import { useProfile } from "../context/ProfileContext";

interface ContactPageProps {
    id: string;
    isActive: boolean;
};

const ContactPage = forwardRef<HTMLDivElement, ContactPageProps>(
    ({ id, isActive }, ref) => {
        const { profileData } = useProfile();

        const contactComponent = profileData && (
            <Contact contactDetails={profileData?.contactDetails} />
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