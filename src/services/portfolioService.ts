import { portfolioServiceApi } from "./api";
import { createServiceRequest } from "./serviceConfig";

export const fetchProfileData = async (profileId: string) => {
  const { path, method } = portfolioServiceApi.GET_PROFILE;
  try {
    const response = await createServiceRequest({
      apiPath: path,
      httpMethod: method,
      params: { profileId },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchResumeData = async (profileId: string) => {
  const { path, method } = portfolioServiceApi.GET_RESUME;
  try {
    const response = await createServiceRequest({
      apiPath: path,
      httpMethod: method,
      params: { profileId },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchProjectsData = async (profileId: string) => {
  const { path, method } = portfolioServiceApi.GET_ALL_PROJECTS;
  try {
    const response = await createServiceRequest({
      apiPath: path,
      httpMethod: method,
      params: { profileId },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const sendContactMessage = async (payload: any) => {
  const { path, method } = portfolioServiceApi.SEND_MESSAGE;
  try {
    const response = await createServiceRequest({
      apiPath: path,
      httpMethod: method,
      payload,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
