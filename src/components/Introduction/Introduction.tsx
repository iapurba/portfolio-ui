import Box from "@mui/material/Box";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import TypingText from "../../common/TypingText/TypingText";
import { useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton/CustomButton";
import SocialLinkIcon from "../../common/SocialLinkIcon/SocialLinkIcon";
import { BioText, LinksContainer } from "./Introduction.styles";
import { mapSocialIcons } from "../../utils/profile.helper";

interface IntroductionProps {
    name: string;
    jobs: string[];
    intro: string;
    profileImageUrl: string;
    socialAccounts: Object;
    onAboutMeClick: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({
    name,
    jobs,
    intro,
    profileImageUrl,
    socialAccounts,
    onAboutMeClick
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
        }, 7000);
        return () => clearInterval(intervalId);
    }, [jobs]);

    const profileImage = (
        <Grid item xs={12} sm={6} md={6}
            container
            justifyContent="center"
        >
            <img
                src={profileImageUrl}
                alt="Avatar"
                style={{
                    width: "auto",
                    height: isMobile ? "200px": "350px",
                    marginBottom: isMobile ? '50px' : '0',
                }}
            />
        </Grid>
    );

    return (
        <div id="introduction">
            <Grid container>
                {isMobile && profileImage}
                <Grid item xs={12} sm={6} md={6}>
                    <Box
                        sx={{
                            textAlign: {
                                xs: "center",
                                sm: "left",
                                md: "left",
                            },
                            maxWidth: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#F75023",
                                fontSize: { xs: "21px", sm: "25px" },
                            }}
                        >
                            Hello, I'm
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "42px", sm: "42px", md: "60px" },
                                fontWeight: "540",
                            }}
                        >
                            {name}
                        </Typography>

                        <TypingText
                            sx={{
                                fontSize: {
                                    xs: "18px",
                                    sm: "18px",
                                    md: "24px",
                                },
                            }}
                            text={jobs[currentIndex]}
                        />

                        <BioText>{intro}</BioText>

                        <LinksContainer
                            justifyContent={{
                                xs: "center",
                                sm: "flex-start",
                                md: "flex-start",
                            }}
                        >
                            <CustomButton
                                label="About Me"
                                onClick={onAboutMeClick}
                            />
                            <Box sx={{ marginLeft: "16px" }}>
                                {Object.entries(socialAccounts).map(([key, value]) => (
                                    <SocialLinkIcon
                                        variant="primary"
                                        key={key}
                                        name={name}
                                        icon={mapSocialIcons(key)}
                                        url={value}
                                    />
                                ))}
                            </Box>
                        </LinksContainer>
                    </Box>
                </Grid>
                {!isMobile && profileImage}
            </Grid>
        </div>
    );
};

export default Introduction;
