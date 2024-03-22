import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomTextField from '../../common/CustomTextField/CustomTextField';
import CustomButton from '../../common/CustomButton/CustomButton';
import { ChangeEvent, useState } from 'react';
import { sendContactMessage } from '../../services/portfolioService';
import { profileConstants } from '../../utils/constants';

interface ContactMeFormProps {
    onSubmit?: () => void;
}

interface FormData {
    senderName: string;
    senderEmail: string;
    subject: string;
    message: string;
}

const ContactMeForm: React.FC<ContactMeFormProps> = ({
    onSubmit,
}) => {
    const [formData, setFormData] = useState<FormData>({
        senderName: '',
        senderEmail: '',
        subject: '',
        message: ''
    });
    const [fieldErrors, setFieldErrors] = useState<Partial<FormData>>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const validateEmail = (email: string): boolean => {
        // Regular expression for validating email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit = async () => {

        const errors: Partial<FormData> = {};

        if (formData.senderName.trim() === '') {
            errors.senderName = 'Name is required';
        }
        if (!validateEmail(formData.senderEmail)) {
            errors.senderEmail = formData.senderEmail.trim() === '' ?
                'Email is required' : 'Invalid Email';
        }
        if (formData.subject.trim() === '') {
            errors.subject = 'Subject is required';
        }
        if (formData.message.trim() === '') {
            errors.message = 'Message is required';
        }

        if (Object.keys(errors).length > 0) {
            // If there are errors, set them and prevent form submission
            setFieldErrors(errors);
            return;
        }

        // If no errors, proceed with submitting the form
        try {
            const payload = {
                ...formData,
                toProfileId: profileConstants.PROFILE_ID,
            }
            // Clear form after successful submission
            setFormData({
                senderName: '',
                senderEmail: '',
                subject: '',
                message: '',
            });
            setFieldErrors({});
            const response = await sendContactMessage(payload);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        fullWidth
                        id="senderName"
                        name="senderName"
                        type="text"
                        placeholder="Your Name*"
                        size="medium"
                        value={formData.senderName}
                        onChange={handleInputChange}
                        error={!!fieldErrors.senderName}
                        helperText={fieldErrors.senderName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField
                        fullWidth
                        id="senderEmail"
                        name="senderEmail"
                        type="email"
                        placeholder="Your Email*"
                        size="medium"
                        value={formData.senderEmail}
                        onChange={handleInputChange}
                        error={!!fieldErrors.senderEmail}
                        helperText={fieldErrors.senderEmail}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        fullWidth
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Subject*"
                        size="medium"
                        value={formData.subject}
                        onChange={handleInputChange}
                        error={!!fieldErrors.subject}
                        helperText={fieldErrors.subject}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        fullWidth
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Write your message here*"
                        size="medium"
                        aria-multiline
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        error={!!fieldErrors.message}
                        helperText={fieldErrors.message}
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