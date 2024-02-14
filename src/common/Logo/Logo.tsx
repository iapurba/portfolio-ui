import StyledText from "./Logo.styles";

interface LogoProps {
    name: string,
    url: string,
}

const Logo: React.FC<LogoProps> = ({ name, url }) => {
    return (
        <StyledText onClick={() => {}}>
            {name}
        </StyledText>
    );
};

export default Logo;