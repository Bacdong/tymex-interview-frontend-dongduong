import { AppConstant } from "@constants/app.constant";
import useInterval from "../use-interval.hook";
import useProductSearch from "./use-product-search.hook";
import { useProductSearchContext } from "@core/contexts";

const useIntervalProductSearch = () => {
    // ** Contexts
    const { searchQuery } = useProductSearchContext();

    // ** Hooks
    const { isLoading, data, mutation } = useProductSearch();

    useInterval(() => {
        mutation(searchQuery);
    }, AppConstant.REFETCH_DURATION);

    return { isLoading, data };
}
 
export default useIntervalProductSearch;
