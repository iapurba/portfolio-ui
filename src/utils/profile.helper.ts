import ProfileType from '../types/Profile.type';
import {
    faGithub,
    faLinkedinIn,
    faFacebookF,
    faInstagram,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons';

export const normalizeProfileData = (data: any): ProfileType => {
    return {
        firstname: data?.firstname ?? '',
        lastname: data?.lastname ?? '',
        intro: data?.intro ?? '',
        bio: data?.bio ?? '',
        jobs: data?.jobs ?? [],
        contactDetails: {
            address: data?.contactDetails?.address ?? '',
            email: data?.contactDetails?.email ?? '',
            phone: data?.contactDetails?.phone ?? '',
        },
        profileImageUrl: data?.profileImageUrl ?? '',
        bioImageUrl: data?.bioImageUrl ?? '',
        socialAccounts: data?.socialAccounts,
        downloadCvUrl: data?.downloadCvUrl ?? '',
    };
};

export const mapSocialIcons = (account: string) => {
    switch (account) {
        case "linkedIn":
            return faLinkedinIn;
        case "github":
            return faGithub;
        case "facebook":
            return faFacebookF;
        case "instagram":
            return faInstagram;
        case "x":
            return faXTwitter;
        default:
            return faLinkedinIn;
    }
};
