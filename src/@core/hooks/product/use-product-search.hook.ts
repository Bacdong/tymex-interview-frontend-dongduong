import { HookReturnType } from "@core/enums";
import { IProduct, IQueryParams } from "@core/models";
import { ProductService } from "@core/services";
import { useCallback, useState } from "react";


const useProductSearch = (): HookReturnType<Array<IProduct>, IQueryParams> => {
    // ** States
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Array<IProduct>>([]);

    const getProducts = async (queryParams: IQueryParams): Promise<void> => {
        setIsLoading(true);
        const response = await ProductService.getAll(queryParams);
        setData(response);
        setIsLoading(false);
    };

    const mutation = useCallback(getProducts, []);

    return { isLoading, data, mutation };
}
 
export default useProductSearch;
