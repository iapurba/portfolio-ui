import ResumeType, {
    CertificationType,
    EducationType,
    JobType,
    TechnicalSkillType,
    WorkExperienceType
} from "../types/Resume.type";

export const normalizeResumeData = (data: any): ResumeType => {
    const workExperiences: WorkExperienceType[] = data?.workExperiences?.map(
        (experience: WorkExperienceType) => ({
            organization: experience?.organization ?? "",
            jobs: experience?.jobs?.map((job: JobType) => ({
                title: job.title,
                startDate: job.startDate,
                endDate: job.endDate,
                jobtype: job.jobtype,
                description: job.description,
            })),
        })
    );
    const technicalSkills: TechnicalSkillType[] = data?.technicalSkills?.map(
        (skill: TechnicalSkillType) => ({
            name: skill.name,
            rating: skill.rating,
        })
    );
    const educations: EducationType[] = data?.educations?.map(
        (education: EducationType) => ({
            institution: education.institution,
            degree: education.degree,
            stream: education.stream,
            startYear: education.startYear,
            endYear: education.endYear,
        })
    );

    const certifications: CertificationType[] = data?.certifications?.map(
        (cert: CertificationType) => ({
            name: cert.name,
            issuer: cert.issuer,
            issuedOn: cert.issuedOn,
        })
    );

    return {
        workExperiences,
        technicalSkills,
        educations,
        certifications
    };
};
