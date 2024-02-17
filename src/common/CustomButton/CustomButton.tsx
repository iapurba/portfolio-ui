import CutomButtonWrapper from "./CustomButton.styles";

interface CustomButtonProps {
    variant?: "contained" | "outlined";
    color?: "green" | "orange" | "purple";
    label: string;
    onClick?: () => void;
}

const FilterButton = ({
    variant = "contained",
    color = "orange",
    label,
    onClick,
    ...props
}: CustomButtonProps) => {
    return (
        <CutomButtonWrapper
            className={`btn btn-custom ${color}
            ${variant === "contained" ? "contained" : "outlined"}`}
            onClick={onClick}
            {...props}
        >
            {label}
        </CutomButtonWrapper>
    );
};

export default FilterButton;
