import { EnumValues } from './types';

export enum ApiErrorEnum {
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export type ApiErrorType = EnumValues<typeof ApiErrorEnum>;

export const ApiErrorMessages: Readonly<Record<ApiErrorType, string>> = {
    [ApiErrorEnum.UNKNOWN_ERROR]: 'ERROR.MESSAGE.UNKNOWN',
};
