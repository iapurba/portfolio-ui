import { IconTextButtonWrapper } from './IconTextButton.styles';

interface IconTextButtonProps {
    startIcon: React.ComponentType;
    label?: string;
    onClick?: () => void;
}

const IconTextButton = ({
    startIcon: StartIcon,
    label,
    onClick,
    ...props
}: IconTextButtonProps) => {
    return (
            <IconTextButtonWrapper
                startIcon={<StartIcon />}
                onClick={onClick}
                {...props}
            >
                {label}
            </IconTextButtonWrapper>
    );
};

export default IconTextButton;