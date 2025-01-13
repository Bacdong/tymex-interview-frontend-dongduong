import { ApiErrorEnum, ApiErrorMessages } from '@core/enums';
import { axiosClient } from '@core/interceptors';
import { IApiResponse } from '@core/models/api-response.model';
import { environment } from '@core/utils';
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

export class ApiService {
    private static get apiUrl(): string {
        const { apis: { default: { url } } } = environment;

        return url || '';
    }

    public static get = <T>(path: string, params: AxiosRequestConfig['params'] = {}) => {
        return axiosClient
            .get<T>(this.apiUrl + path, { params })
            .then(this.formatResponse)
            .catch(this.formatError);
    }

    public static post = <T>(path: string, body = {}) => {
        return axiosClient
            .post<T>(this.apiUrl + path, body)
            .then(this.formatResponse)
            .catch(this.formatError);
    }

    public static put = <T>(path: string, body = {}) => {
        return axiosClient
            .put<T>(this.apiUrl + path, body)
            .then(this.formatResponse)
            .catch(this.formatError);
    }

    public static delete = <T>(path: string) => {
        return axiosClient
            .delete<T>(this.apiUrl + path)
            .then(this.formatResponse)
            .catch(this.formatError);
    }

    private static readonly formatResponse = (response: AxiosResponse): IApiResponse => {
        return {
            data: response.data,
            success: true,
        };
    };

    private static readonly formatError = (error: AxiosError | unknown): IApiResponse => {
        const formattedError: IApiResponse = {
            data: null,
            success: false,
            error_code: ApiErrorEnum.UNKNOWN_ERROR,
            error_message: ApiErrorMessages[ApiErrorEnum.UNKNOWN_ERROR],
        };

        if (axios.isAxiosError(error)) {
            formattedError.error_code = error.code || ApiErrorEnum.UNKNOWN_ERROR;
            formattedError.error_message = error.message || ApiErrorMessages[ApiErrorEnum.UNKNOWN_ERROR];
        }

        return formattedError;
    };
}
