import { IApiResponse, IProduct, IQueryParams } from "@core/models";
import { ApiService } from "./api.service";
import { ApiConstant } from "@constants/api.constant";

export class ProductService {
    public static readonly getAll = (params: IQueryParams = {}): Promise<Array<IProduct>> => {
        return ApiService
            .get<Array<IProduct>>(ApiConstant.PRODUCT, params)
            .then((res: IApiResponse<Array<IProduct>>) => res.data);
    }

    public static readonly get = (id: number): Promise<IProduct> => {
        return ApiService
            .get<IProduct>(ApiConstant.PRODUCT + '/' + id)
            .then((res: IApiResponse<IProduct>) => res.data);
    }
}
