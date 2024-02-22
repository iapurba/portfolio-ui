import Portfolio from "../components/Portfolio/Portfolio";
import { projectData } from "../data/project.data";
import { TabItem } from "../types/Project.type";
import PageBuilder from "../common/PageBuilder/PageBuilder";
import { forwardRef } from "react";

interface PortfolioPageProps {
    id: string;
    isActive: boolean;
}

const PortfolioPage = forwardRef<HTMLDivElement, PortfolioPageProps>(
    ({ id, isActive }, ref) => {

    const tabs: TabItem[] = [
        { label: 'All', value: 'all' },
        { label: 'AWS', value: 'aws' },
        { label: 'Terraform', value: 'terraform' },
        { label: 'Python', value: 'python' },
        { label: 'CI/CD', value: 'cicd' },
        { label: 'Kubernetes', value: 'kubernetes' },
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
        <div id={id} ref={ref}>
            <PageBuilder
                id="portfolio-page-content"
                title="Portfolio"
                subtitle1="My Amaazing Works"
                children={portfolioComponent}
                isActive={isActive}
            />
        </div>
    );
});

export default PortfolioPage;