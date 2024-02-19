export interface JobType {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    jobtype: string;
    description: string;
};

export interface WorkExperienceType {
    id: number;
    company: string;
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

export interface ContactDetailsType {
    address: string;
    email: string;
    mobile: string;
};

export interface ProfileType {
    name: string;
    jobs: string[];
    intro: string;
    bio: string;
    workExperience: WorkExperienceType[];
    technicalSkills: TechnicalSkillType[];
    education: EducationType[];
    certifications: CertificationType[];
    contactDetails: ContactDetailsType;
};

export default ProfileType;
