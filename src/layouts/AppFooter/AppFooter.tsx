import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SocialLinkIcon from "../../common/SocialLinkIcon/SocialLinkIcon";
import { socialLinks } from "../../data/socialLinks";

const AppFooter: React.FC = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Box sx={{ backgroundColor: '#F7F9F9', }}>
            <Container sx={{ padding: "60px 0" }}>
                <Box sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}>
                    <Typography>Developed with Love by <b>Apurba</b> <span>&copy;</span> {currentYear}</Typography>
                    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                        {socialLinks.map((item, index) => (
                            <SocialLinkIcon
                                variant="contained"
                                key={index}
                                name={item.name}
                                icon={item.icon}
                                url={item.url}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default AppFooter;