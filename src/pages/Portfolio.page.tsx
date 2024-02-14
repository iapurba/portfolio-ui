import Container from "@mui/material/Container"
import PageHeader from "../common/PageHeader/PageHeader";
import Box from "@mui/material/Box";
import Portfolio from "../components/Portfolio/Portfolio";
import { projectData } from "../data/project.data";

const PortfolioPage = () => {

    const tabs = [
        { label: 'All', value: 'all' },
        { label: 'AWS', value: 'aws' },
        { label: 'Docker', value: 'docker' },
        { label: 'Python', value: 'python' },
        { label: 'Kubernetes', value: 'kubernetes' },
        { label: 'Terraform', value: 'terraform' },
        { label: 'CI/CD', value: 'cicd' },
        { label: 'Monitoring', value: 'monitoring' },
    ];
    const projects = projectData;

    return (
        <Container sx={{ padding: '50px 0' }}>
            <PageHeader
                title="Portfolio"
                subtitle1="My Amaazing Works"
            />
            <Box sx={{ marginTop: "30px", marginBottom: '80px' }}>
                <Portfolio
                    tabs={tabs}
                    projectList={projects}
                />
            </Box>

        </Container>
    )
};

export default PortfolioPage;