import { StandardTextFieldProps } from '@mui/material/TextField';
import { StyledTextField } from './CustomTextField.styles';

interface CustomTextFieldProps extends StandardTextFieldProps {
    required?: boolean;
    placeholder?: string;
    label?: string;
    size?: 'small' | 'medium';
    error?: boolean;
    helperText?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    required = false,
    placeholder = '',
    label,
    error = false,
    helperText,
    ...rest
}) => {
    return (
        <StyledTextField
            className={ error ? "outlined-error-helper-text": ""}
            required={required}
            label={null}
            placeholder={required ? `${placeholder}*` : placeholder}
            error={error}
            helperText={helperText}
            {...rest}
            size='medium'
        />
    );
};

export default CustomTextField;