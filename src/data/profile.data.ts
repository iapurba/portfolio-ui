import ProfileType from "../types/Profile.type";

const profileData: ProfileType = {
    name: "Sourav Dinda",
    jobs: [
        "DevOps Engineer",
        "AWS Certified Develover Associate",
        "AWS Certified Solution Architect Associate",
        "GitLab Certified Associate",
        "Redhat Certified Engineer in Ansible",
    ],
    intro:
        `Goal-oriented & results-driven professional targeting 
        assignments as AWS Cloud Engineer & DevOps Engineer 
        with an esteemed organization, across PAN India`,
    bio:
        `<p>I am an <b>AWS DevOps Engineer</b> at 
    <b><i>Tata Consultancy Services</i></b>, 
    where I work with various tools and technologies to automate, monitor, 
    and optimize the software development and delivery processes for 
    large-scale projects. I have experience with Splunk, AppDynamics, 
    Terraform, AWS, GitLab CI/CD, Jenkins, BitBucket, scripting languages, 
    Docker, OpenShift, and many more.<br>

    <br>I have also earned multiple certifications from AWS, RedHat, and 
    GitLab, demonstrating my proficiency and expertise in these domains. 
    I have a passion for learning and exploring the latest and high-end 
    technologies that are available in the market. I want to contribute to 
    the development of India in the technical field and work in organizations 
    or industries that are directly or indirectly engaged in this mission. 
    I am always eager to collaborate with others who share the same vision 
    and goals.</p>`,
    workExperience: [
        {
            id: 1,
            company: "Tata Consultancy Services",
            jobs: [
                {
                    id: 1,
                    title: "AWS DevOps Engineer",
                    startDate: "2021",
                    endDate: "Present",
                    jobtype: "Full time",
                    description: `Deeply working on Splunk , Appdynamic, terraform , 
                    AWS , GItlab CICD , Jenkins , BitBucket , scripting language , 
                    docker , Openshift and many more.`,
                },
            ],
        },
        {
            id: 2,
            company: "Linux World Informatics Private Ltd",
            jobs: [
                {
                    id: 1,
                    title: "DevOps intern",
                    startDate: "2020",
                    endDate: "2021",
                    jobtype: "Full time",
                    description:
                        `Executed real-life projects involving AWS, 
                        Docker, Ansible, Terraform, Jenkins, Kubernetes, 
                        and Openshift, contributed to a comprehensive 
                        understanding of DevOps practices`,
                },
            ],
        },
    ],
    technicalSkills: [
        { name: "Docker", rating: 8 },
        { name: "Kunernetes", rating: 7 },
        { name: "Jenkins", rating: 7 },
        { name: "Terraform", rating: 9 },
        { name: "Git", rating: 8 },
        { name: "Gitlab CI/CD", rating: 9 },
        { name: "Linux", rating: 8 },
        { name: "Python", rating: 9 },
        { name: "AWS Cloud", rating: 9 },
        { name: "Openshift", rating: 7 },
        { name: "Splunk", rating: 7 },
    ],
    education: [
        {
            institution: "College of Engineering & Management, Kolaghat",
            degree: "Bachelor of Technology",
            stream: "Computer Science",
            startYear: "2017",
            endYear: "2021",
        },
    ],
    certifications: [
        {
            name: "AWS Certified Developer Associate",
            issuer: "Amazon Web Services (AWS)",
            issuedOn: "May 2022",
        },
        {
            name: "Redhat Certified Specialist in Container & Kubernetes ",
            issuer: "Red Hat",
            issuedOn: "Feb 2022",
        },
        {
            name: "Gitlab Certified Associate",
            issuer: "GitLab",
            issuedOn: "Nov 2021",
        },
        {
            name: "Redhat certified specialist in Ansible Automation",
            issuer: "Red Hat",
            issuedOn: "Aug 2021",
        },
    ],
    contactDetails: {
        address: "Haldia,East Medinipur,WB",
        email: "souravdindacse2@gmail.com",
        mobile: "+91 7001458782",
    },
};

export default profileData;
