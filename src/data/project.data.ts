import { ProjectType } from "../types/Project.type";

export const projectData: ProjectType[] = [
    {
        title: `Automated Flask App Deployment on ECS: 
                Terraform-backend, CI/CD Pipeline`,
        tags: ['aws', 'cicd'],
        details: `<p>The project embarks on a journey of automating the 
        deployment of a Flask application on Amazon ECS by seamlessly 
        integrating Terraform for infrastructure provisioning and AWS 
        CodePipeline for continuous integration and deployment (CI/CD). 
        Initially, Terraform is employed to define the infrastructure 
        essentials, configuring the ECS cluster, task definition, 
        service, and related resources. Leveraging Terraform's backend 
        ensures robust state management and fosters collaboration among 
        team members. Subsequently, a CodePipeline pipeline is configured 
        to monitor a designated code repository, such as AWS CodeCommit, 
        for any changes. Upon detecting modifications, the pipeline 
        triggers a series of orchestrated stages. In the source stage, 
        CodePipeline fetches the Flask application code, 
        while in the subsequent build stage, Terraform undertakes the 
        compilation and Dockerization of the application. The resultant 
        Docker image is then pushed to Amazon ECR, leveraging Terraform's 
        backend to maintain state consistency throughout the process. 
        Finally, in the deploy stage, Terraform orchestrates the update of 
        the ECS service with the freshly generated Docker image, ensuring 
        a smooth and seamless rolling deployment of the Flask application. 
        Throughout this process, the Terraform backend serves as a 
        cornerstone for state management, while CodePipeline takes charge 
        of workflow orchestration, facilitating continuous delivery to ECS. 
        This setup not only enhances deployment efficiency but also ensures 
        consistency and fosters collaboration across teams, enabling rapid 
        and reliable deployment iterations of the Flask application on 
        Amazon ECS.</p>`
    },
    {
        title: `Serverless Infrastructure Automation: Streamlined CI/CD 
        with Terraform, AWS CodePipeline, and Lambda`,
        tags: ['aws', 'cicd'],
        details: `<p>The project aims to establish a comprehensive infrastructure 
        automation solution utilizing Terraform, AWS CodePipeline, AWS Lambda, 
        API Gateway, and DynamoDB for efficient development and deployment of 
        serverless applications. Leveraging Terraform, infrastructure 
        components like DynamoDB tables, Lambda functions, and API Gateway 
        resources are defined as code, ensuring repeatability and scalability. 
        AWS CodePipeline orchestrates the CI/CD pipeline, automating the 
        process of detecting changes in the Terraform code repository, 
        executing builds, and deploying infrastructure updates. Within this 
        framework, Lambda functions serve as the backbone for API endpoints, 
        facilitating CRUD operations on DynamoDB data. Various use cases, 
        including create, read, update, and delete operations, demonstrate the 
        versatility of serverless architectures in dynamically managing data 
        through API requests. For instance, Lambda functions process incoming 
        requests from API Gateway, executing operations such as creating new 
        records, retrieving data, updating existing entries, and deleting 
        unwanted information from the DynamoDB database. This integration 
        ensures seamless communication between components, enabling agile 
        development and deployment practices. The CI/CD pipeline streamlines 
        the release process, promoting rapid iteration and continuous 
        improvement of serverless infrastructure. Overall, this solution 
        combines infrastructure as code principles with serverless technologies 
        to deliver scalable, reliable, and efficient applications, setting the 
        stage for modern DevOps practices and facilitating the development of 
        innovative solutions with minimal operational overhead.</p>`
    },
    {
        title: `End-to-End CI/CD Pipeline: GitHub, Maven, Jenkins, Artifactory, 
        SonarQube, Docker, Ansible, and Tomcat Integration`,
        tags: ['cicd'],
        details: `<p>The CI/CD pipeline incorporates a suite of essential tools to 
        streamline the software development lifecycle. GitHub serves as the 
        source code management platform, providing version control and 
        collaboration features. Maven is employed as the build tool, 
        automating the compilation, testing, and packaging processes of 
        Java-based projects. Jenkins orchestrates the continuous integration 
        and continuous delivery (CI/CD) pipeline, automating build, test, 
        and deployment tasks. Artifactory functions as the artifact repository 
        manager, storing and managing build artifacts securely. SonarQube 
        enhances code quality and facilitates code analysis by identifying 
        bugs, vulnerabilities, and code smells. Docker enables containerization 
        of applications, ensuring consistent deployment across various 
        environments. Ansible, a configuration management tool, automates the 
        provisioning, configuration, and deployment of infrastructure 
        components. Finally, Tomcat serves as the application server, hosting 
        and managing Java web applications. This comprehensive toolchain 
        fosters automation, collaboration, and quality assurance throughout 
        the software development lifecycle, from version control and build to 
        deployment and application hosting. The seamless integration of these 
        tools enables teams to accelerate development cycles, maintain code 
        quality, and deliver reliable software solutions efficiently.</p>`,
    },
    {
        title: "Intregated Load balancer with Auto scalling and Route53 using Terraform module",
        tags: ['aws'],
        details: `<p>Intregated Load balancer with Auto scalling and Route53 
        using Terraform module with best practices</p>`
    },
    {
        title: "Intregated Load balancer with Auto scalling and Route53 using Terraform module",
        tags: ['aws'],
        details: `<p>Intregated Load balancer with Auto scalling and Route53 using Terraform module with best practices</p>`
    },
]