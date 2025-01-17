import { useEffect } from 'react';
import { AppConstant } from '../../../@constants/app.constant';
import { useProductSearchContext } from '../../contexts/product-search.context';
import useInterval from '../common/use-interval.hook';
import useProductSearch from './use-product-search.hook';

const useIntervalProductSearch = () => {
    // ** Contexts
    const { searchQuery, saveProducts } = useProductSearchContext();

    // ** Hooks
    const { isLoading, data, mutation } = useProductSearch();

    useEffect(() => {
        mutation({});
    }, []);

    useInterval(() => {
        mutation(searchQuery);
    }, AppConstant.REFETCH_DURATION);

    useEffect(() => {
        saveProducts(data);
    }, [data]);

    return { isLoading, data };
};

export default useIntervalProductSearch;
