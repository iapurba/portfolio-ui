import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomTextField from '../../common/CustomTextField/CustomTextField';
import CustomButton from '../../common/CustomButton/CustomButton';
import { ChangeEvent, useState } from 'react';

interface ContactMeFormProps {
    onSubmit: () => void;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactMeForm: React.FC<ContactMeFormProps> = ({
    onSubmit,
}) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = () => {
        console.log("handle submit ", formData)
    }

    return (
        <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        fullWidth
                        id="senderName"
                        name="senderName"
                        type="text"
                        placeholder="Your Name"
                        size="medium"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        fullWidth
                        id="senderEmail"
                        name="senderEmail"
                        type="email"
                        placeholder="Your Email"
                        size="medium"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        fullWidth
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        size="medium"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        fullWidth
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Write your message here"
                        size="medium"
                        aria-multiline
                        multiline
                        rows={5}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomButton
                        label='Submit Now'
                        onClick={handleSubmit}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactMeForm;