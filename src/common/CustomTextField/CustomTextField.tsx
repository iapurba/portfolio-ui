import { StandardTextFieldProps } from '@mui/material/TextField';
import { StyledTextField } from './CustomTextField.styles';

interface CustomTextFieldProps extends StandardTextFieldProps {
    required?: boolean;
    placeholder?: string;
    label?: string;
    size?: 'small' | 'medium';
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    required = false,
    placeholder = '',
    label,
    ...rest
}) => {
    return (
        <StyledTextField
            required={required}
            label={null}
            placeholder={required ? `${placeholder}*` : placeholder}
            {...rest}
            size='medium'
        />
    );
};

export default CustomTextField;