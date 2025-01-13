import { IProduct, IQueryParams } from "@core/models";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type ProductSearchContextValue = {
    searchQuery: IQueryParams;
    saveSearchQuery: (updatedQuery: IQueryParams) => void;

    products: Array<IProduct>;
    saveProducts: (updatedProducts: Array<IProduct>) => void;
};

export const initialSearchQuery: IQueryParams = {
    keyword: '',
    min_price: 0,
    max_price: Infinity,
    tier: '',
    theme: '',
    sort_by: '',
    category_name: '',
};

export const ProductSearchContext = createContext<ProductSearchContextValue>({
    searchQuery: initialSearchQuery,
    saveSearchQuery: () => null,

    products: [],
    saveProducts: () => null,
});

export const useProductSearchContext = () => useContext(ProductSearchContext);

export const ProductSearchProvider = ({ children }: { children: ReactNode }) => {
    // ** States
    const [searchQuery, setSearchQuery] = useState<IQueryParams>(initialSearchQuery);
    const [products, setProducts] = useState<Array<IProduct>>([]);

    // ** Logic handlers
    const saveSearchQuery = (updatedQuery: IQueryParams) => {
        setSearchQuery(updatedQuery);
    };

    const saveProducts = (updatedProducts: Array<IProduct>) => {
        setProducts(updatedProducts);
    };

    // ** Memorized context values
    const contextValues: ProductSearchContextValue = useMemo(
        () => ({
            searchQuery,
            saveSearchQuery,

            products,
            saveProducts,
        }),
        [
            searchQuery,
            saveSearchQuery,

            products,
            saveProducts,
        ]
    );

    return (
        <ProductSearchContext.Provider value={contextValues}>
            {children}
        </ProductSearchContext.Provider>
    )
};
