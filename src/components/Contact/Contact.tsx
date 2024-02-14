import Grid from "@mui/material/Grid"
import ContactDetails from "./ContactDetails";
import ContactMeForm from "./ContactMeForm";

interface ContantProps {
    contactDetails: {
        address: string;
        email: string;
        mobile?: string;
    };
    onSubmit: () => void;
}
const Contact: React.FC<ContantProps> = ({
    contactDetails,
    onSubmit
}) => {
    const { address, email, mobile } = contactDetails;
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6}>
                <ContactDetails
                    address={address}
                    email={email}
                    mobile={mobile}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <ContactMeForm onSubmit={onSubmit} />
            </Grid>
        </Grid>
    )
}

export default Contact;