export interface ContactDetailsType {
    address: string;
    email: string;
    phone: string;
};

export interface ProfileType {
    firstname: string;
    lastname: string;
    jobs: string[];
    intro: string;
    bio: string;
    contactDetails: ContactDetailsType;
    profileImageUrl: string;
    bioImageUrl: string;
    socialAccounts: Object;
    downloadCvUrl: string;
};

export default ProfileType;
