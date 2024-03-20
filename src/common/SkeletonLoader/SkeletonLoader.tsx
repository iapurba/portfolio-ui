import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const SkeletonLoader: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Skeleton variant="text" sx={{ fontSize: '4rem' }} animation="wave" />
                </Grid>
                <Grid item xs={12}>
                    <Skeleton variant="rounded" width={'100%'} height={260} animation="wave" />
                </Grid>
                <Grid item xs={12}>
                    <Skeleton variant="rounded" width={'100%'} height={260} animation="wave" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default SkeletonLoader;