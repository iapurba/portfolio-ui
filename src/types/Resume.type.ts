export interface JobType {
    title: string;
    startDate: string;
    endDate: string;
    jobtype: string;
    description: string;
};

export interface WorkExperienceType {
    organization: string;
    jobs: JobType[];
};

export interface TechnicalSkillType {
    name: string;
    rating: number;
};

export interface EducationType {
    institution: string;
    degree: string;
    stream: string;
    startYear: string;
    endYear: string;
};

export interface CertificationType {
    name: string;
    issuer: string;
    issuedOn: string;
};

export interface ResumeType {
    workExperiences: WorkExperienceType[];
    technicalSkills: TechnicalSkillType[];
    educations: EducationType[];
    certifications: CertificationType[];
};

export default ResumeType;
