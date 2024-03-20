import Grid from "@mui/material/Grid"
import ContactDetails from "./ContactDetails";
import ContactMeForm from "./ContactMeForm";
import { ContactDetailsType } from "../../types/Profile.type";

interface ContantProps {
    contactDetails: ContactDetailsType;
}
const Contact: React.FC<ContantProps> = ({
    contactDetails,
}) => {
    const { address, email, phone } = contactDetails;
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6}>
                <ContactDetails
                    address={address}
                    email={email}
                    phone={phone}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <ContactMeForm />
            </Grid>
        </Grid>
    )
}

export default Contact;