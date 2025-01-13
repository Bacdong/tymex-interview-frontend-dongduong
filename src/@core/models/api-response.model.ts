import { SafeAny } from "@core/enums";

export interface IApiResponse<T = SafeAny> {
    data: T;
    success: boolean;
    error_code?: string;
    error_message?: string;
}

export interface IPaginationResponse<T = SafeAny> {
    total_pages: number;
    total_items: number;
    prev_page: number | null;
    page: number;
    next_page: number | null;
    results: Array<T>;
}

export type ApiResponseWithPagination<T = SafeAny> = IApiResponse<IPaginationResponse<T>>;
