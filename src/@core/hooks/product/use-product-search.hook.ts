import { useCallback, useState } from 'react';
import { HookReturnType } from '../../enums/types/common.type';
import { IProduct } from '../../models/product.model';
import { IQueryParams } from '../../models/common.model';
import { ProductService } from '../../services/product.service';
import { useProductSearchContext } from '../../contexts';

const useProductSearch = (): HookReturnType<Array<IProduct>, IQueryParams> => {
    // ** Contexts
    const { saveProducts } = useProductSearchContext();

    // ** States
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Array<IProduct>>([]);

    const getProducts = async (queryParams: IQueryParams): Promise<void> => {
        setIsLoading(true);
        const response = await ProductService.getAll(queryParams);
        setData(response);
        saveProducts(response);
        setIsLoading(false);
    };

    const mutation = useCallback(getProducts, []);

    return { isLoading, data, mutation };
};

export default useProductSearch;
