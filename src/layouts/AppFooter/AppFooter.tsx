import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SocialLinkIcon from "../../common/SocialLinkIcon/SocialLinkIcon";
import { useProfile } from "../../context/ProfileContext";
import { mapSocialIcons } from "../../utils/profile.helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const AppFooter: React.FC = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const { profileData } = useProfile();

    const navigateToLinkedInHandle = () => {
        window.open("https://www.linkedin.com/in/iapurba/", "_blank");
    };

    return (
        <Box sx={{ backgroundColor: "#F7F9F9" }}>
            <Container sx={{ padding: "60px 0" }}>
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                            md: "row",
                        },
                        justifyContent: "space-between",
                    }}
                >
                    {profileData?.firstname === "Apurba" &&
                        profileData.lastname === "Panja" ? (
                        <Typography>
                            <b
                                style={{ cursor: "pointer" }}
                                onClick={navigateToLinkedInHandle}
                            >Apurba Panja </b>{" "}
                            &copy; {`${currentYear !== 2024 ? "2024 - " : ""}`}
                            {currentYear}
                        </Typography>
                    ) : (
                        <Typography>
                            Created with{" "}
                            <FontAwesomeIcon icon={faHeart} style={{ color: "#ec2260" }} /> by{" "}
                            <b
                                style={{ cursor: "pointer", }}
                                onClick={navigateToLinkedInHandle}
                            >Apurba</b>{" "}
                            &copy; {`${currentYear !== 2024 ? "2024 - " : ""}`}
                            {currentYear}
                        </Typography>
                    )}
                    <Box
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        {profileData &&
                            Object.entries(profileData?.socialAccounts).map(
                                ([key, value]) => (
                                    <SocialLinkIcon
                                        variant="contained"
                                        key={key}
                                        name={key}
                                        icon={mapSocialIcons(key)}
                                        url={value}
                                    />
                                )
                            )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AppFooter;
