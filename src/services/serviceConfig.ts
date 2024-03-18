import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { serviceConstants } from "../utils/constants";

type ServiceConfig = {
  apiPath: string;
  httpMethod: AxiosRequestConfig["method"];
  payload?: any | null;
  params?: Record<string, string>;
};

export const createServiceRequest = async <T>({
  apiPath,
  httpMethod,
  payload = null,
  params = {},
}: ServiceConfig): Promise<AxiosResponse<T>> => {
  try {
    let finalApiPath = apiPath;
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        finalApiPath = finalApiPath.replace(`{${key}}`, params[key]);
      }
    }
    const requestConfig: AxiosRequestConfig = {
      method: httpMethod,
      url: `${serviceConstants.SERVICE_DOMAIN}${finalApiPath}`,
      headers: {
        Authorization: ``,
        "Content-Type": "application/json",
      },
      data: payload ? JSON.stringify(payload) : null,
    };

    const response: AxiosResponse = await axios(requestConfig);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Request failed with status ${error.response?.status}: ${error.response?.data}`
      );
    } else {
      throw new Error(`Request failed: ${error}`);
    }
  }
};
