import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CustomFAIcon, CustomFAIconContained, CustomLink } from "./SocialLinkIcon.styles";

interface SocialLinkIconProps {
    variant?: "contained" | "primary"
    name: string;
    icon: IconProp;
    url: string;
}

const SocialLinkIcon: React.FC<SocialLinkIconProps> = ({
    variant = "primary",
    name,
    icon,
    url
}) => {
    return (
        variant === 'contained' ? (
            <CustomLink
                href={url}
                className={`fa-icon-link`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CustomFAIconContained
                    className={"contained"}
                    icon={icon}
                />
            </CustomLink>
        ) : (
            <CustomLink
                href={url}
                className={`fa-icon-link`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CustomFAIcon
                    className={"contained"}
                    icon={icon}
                />
            </CustomLink>
        )
    )
};

export default SocialLinkIcon;