import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import TypingText from "../../common/TypingText/TypingText";
import { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton/CustomButton";
import SocialLinkIcon from "../../common/SocialLinkIcon/SocialLinkIcon";
import avatarImage from "../../assets/souravdinda1.png";
import { socialLinks } from "../../data/socialLinks";
import { BioText, LinksContainer, NameText } from "./Introduction.styles";


interface IntroductionProps {
    name: string,
    jobs: string[];
    intro: string;
}

const Introduction: React.FC<IntroductionProps> = ({
    name,
    jobs,
    intro,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % jobs.length);
        }, 7000);
        return () => clearInterval(intervalId);
    }, [jobs]);

    return (
        <div id="introduction">
            <Grid container>
                <Grid item sm={12} md={6}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{
                            color: '#F75023',
                            fontSize: '25px'
                        }}>Hello, I'm</Typography>
                        <NameText>{name}</NameText>
                        <TypingText text={jobs[currentIndex]} />
                        <BioText>{intro}</BioText>
                        <LinksContainer>
                            <CustomButton label='About Me' />
                            <Box sx={{ marginLeft: '16px' }}>
                                {socialLinks.map((item, index) => (
                                    <SocialLinkIcon
                                        variant="primary"
                                        key={index}
                                        name={item.name}
                                        icon={item.icon}
                                        url={item.url}
                                    />
                                ))}
                            </Box>
                        </LinksContainer>
                    </Box>
                </Grid>
                <Grid item sm={12} md={6} container justifyContent="center">
                    <img
                        src={avatarImage}
                        alt="Avatar"
                        style={{
                            width: 'auto',
                            height: '450px'
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Introduction;