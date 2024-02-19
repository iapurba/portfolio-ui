import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import TypingText from "../../common/TypingText/TypingText";
import { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton/CustomButton";
import SocialLinkIcon from "../../common/SocialLinkIcon/SocialLinkIcon";
import avatarImage from "../../assets/souravdinda1.png";
import { socialLinks } from "../../data/socialLinks";
import { BioText, LinksContainer } from "./Introduction.styles";


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
                    <Box sx={{
                        textAlign: {
                            xs: 'center',
                            sm: 'left',
                            md: 'left',
                        },
                        maxWidth: "100%",
                    }}>
                        <Typography sx={{
                            color: '#F75023',
                            fontSize: { xs: '21px', sm: '25px' }
                        }}>Hello, I'm</Typography>

                        <Typography sx={{
                            fontSize: { xs: '42px', sm: '60px' },
                            fontWeight: '540'
                        }}>
                            {name}
                        </Typography>

                        <TypingText sx={{
                            fontSize: {
                                xs: '18px',
                                sm: '24px',
                            }
                        }} text={jobs[currentIndex]} />

                        <BioText>{intro}</BioText>

                        <LinksContainer>
                            <CustomButton
                                label='About Me'
                            />
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
                <Grid item sm={12} md={6}
                    container
                    justifyContent="center"
                >
                    <img
                        src={avatarImage}
                        alt="Avatar"
                        style={{
                            width: "auto",
                            height: "300px"
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Introduction;