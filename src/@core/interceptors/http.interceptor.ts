import axios, { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios";
import { environment } from "../utils/environment.util";
import { JwtService } from "../services/jwt.service";

const {
    apis: {
        default: { url },
    }
} = environment;

const axiosOptions: CreateAxiosDefaults = {
    baseURL: url,
    headers: {
        Accept: 'application/json',
    },
};

export const axiosClient: AxiosInstance = axios.create(axiosOptions);

const axiosRequestHandler = (configs: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = JwtService.jwtToken;
    if (accessToken) {
        configs.headers.Authorization = `Bearer ${accessToken.replace(/^"|"$/g, '')}`;
    }

    return configs;
};

const axiosResponseHandler = (response: AxiosResponse) => response;

const axiosErrorHandler = (error: AxiosError): Promise<void> => {
    // ** Adding logic handlers here for specific error handling, such as auto refresh token if expired, ...

    return Promise.reject(error);
};

const initialInterceptors = (axiosInstance: AxiosInstance): void => {
    axiosInstance.interceptors.request.use(axiosRequestHandler);
    axiosInstance.interceptors.response.use(axiosResponseHandler, axiosErrorHandler);
};

export const initialInterceptorsFactory = (): void => {
    if (typeof window === 'undefined') {
        initialInterceptors(axiosClient);
    }
};
