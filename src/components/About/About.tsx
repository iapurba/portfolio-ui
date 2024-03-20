import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomButton from "../../common/CustomButton/CustomButton";
import PageHeader from "../../common/PageHeader/PageHeader";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

interface AboutProps {
    bio: string;
    bioImageUrl: string;
    onHireMeClick: () => void;
    onDownloadCvClick: () => void;
}

const About: React.FC<AboutProps> = ({ 
    bio, 
    bioImageUrl,
    onHireMeClick,
    onDownloadCvClick,
}) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6}
                container
                justifyContent="center"
            >
                <img 
                    src={bioImageUrl}
                    alt="Avatar"
                    style={{
                        width: "auto",
                        margin: "auto",
                        height: isMobile? "200px": "350px",
                        marginBottom: isMobile ? '50px' : 'none',
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{
                    textAlign: {
                        xs: "center",
                        sm: "left",
                    },
                }}
                >
                    <PageHeader
                        title="About Me"
                        subtitle1="An Engineer With Passion"
                        sx={{
                            textAlign: {
                                xs: "center",
                                sm: "left",
                            }
                        }}
                    />
                    <Typography dangerouslySetInnerHTML={{ __html: bio }} />
                    <Box
                        pt={2}
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={{ xs: "center", md: "flex-start" }}
                    >
                        <Box mr={1}>
                            <CustomButton
                                label="Hire Me"
                                onClick={onHireMeClick}
                            />
                        </Box>
                        <Box>
                            <CustomButton
                                label="Download CV"
                                color="green"
                                onClick={onDownloadCvClick}
                            />
                        </Box>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
};

export default About;