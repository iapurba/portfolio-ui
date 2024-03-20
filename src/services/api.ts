type ServiceEndpoint = {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

type ServiceApiType = {
    [key: string]: ServiceEndpoint;
};

export const portfolioServiceApi: ServiceApiType = {
    GET_PROFILE: {
        path: '/profiles/{profileId}',
        method: 'GET'
    },
    GET_RESUME: {
        path: '/profiles/{profileId}/resume',
        method: 'GET'
    },
    GET_ALL_PROJECTS: {
        path: '/profiles/{profileId}/projects',
        method: 'GET'
    },
    GET_PROJECT: {
        path: '/profiles/{profileId}/projects/{projectId}',
        method: 'GET'
    },
    SEND_MESSAGE: {
        path: '/contact',
        method: 'POST'
    },
};