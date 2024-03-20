import { createContext, useContext, useEffect, useState } from "react";
import ProfileType from "../types/Profile.type";
import { fetchProfileData } from "../services/portfolioService";
import { profileConstants } from "../utils/constants";
import { normalizeProfileData } from "../utils/profile.helper";
import SkeletonLoader from "../common/SkeletonLoader/SkeletonLoader";

interface ProfileContextType {
    profileData: ProfileType | null;
    loading: boolean;
}

const ProfileContext = createContext<ProfileContextType>({
    profileData: null,
    loading: true,
});

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider: React.FC<any> = ({ children }) => {
    const [profileData, setProfileData] = useState<ProfileType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getProfileData = async (profileId: string) => {
            try {
                if (!profileData) {
                    const response = await fetchProfileData(profileId);
                    const normalizedData = normalizeProfileData(response.data);
                    setProfileData(normalizedData);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        }
        getProfileData(profileConstants.PROFILE_ID);
    }, [profileData]);

    if (loading) {
        return <SkeletonLoader />;
    };

    return (
        <ProfileContext.Provider value={{ profileData, loading }}>
            {children}
        </ProfileContext.Provider>
    );
}