import CutomButtonWrapper from "./CustomButton.styles";

interface CustomButtonProps {
    variant?: 'primary' | 'secondary';
    label: string;
    onClick?: () => void
}

const FilterButton = ({
    variant = 'primary',
    label,
    onClick,
    ...props
}: CustomButtonProps) => {
    return (
        <CutomButtonWrapper
            className={`btn btn-custom 
            ${variant === 'primary' ? 'primary' : 'secondary'}`}
            onClick={onClick}
            {...props}
        >
            {label}
        </CutomButtonWrapper>
    );
};

export default FilterButton;