import Portfolio from "../components/Portfolio/Portfolio";
import { projectData } from "../data/project.data";
import { TabItem } from "../types/Project.type";
import PageBuilder from "../common/PageBuilder/PageBuilder";

const PortfolioPage: React.FC = () => {

    const tabs: TabItem[] = [
        { label: 'All', value: 'all' },
        { label: 'AWS', value: 'aws' },
        { label: 'Python', value: 'python' },
        { label: 'Kubernetes', value: 'kubernetes' },
        { label: 'Terraform', value: 'terraform' },
        { label: 'CI/CD', value: 'cicd' },
        { label: 'Monitoring', value: 'monitoring' },
    ];
    const projects = projectData;

    const portfolioComponent = (
        <Portfolio
            tabs={tabs}
            projects={projects}
        />
    );

    return (
        <PageBuilder
            id="portfolio"
            title="Portfolio"
            subtitle1="My Amaazing Works"
            children={portfolioComponent}
        />
    );
};

export default PortfolioPage;