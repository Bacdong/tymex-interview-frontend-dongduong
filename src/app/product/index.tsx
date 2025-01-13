import { useProductSearchContext } from "../../@core";
import useIntervalProductSearch from "../../@core/hooks/product/use-interval-product-search.hook";

const Product = () => {
    // ** Contexts
    const { products } = useProductSearchContext();

    // ** Hooks
    const { isLoading } = useIntervalProductSearch();

    if (isLoading) {
        return <p>Loading data...</p>;
    }

    return (
        <>
            <h3>Product page is working!</h3>
            <br />
            {products?.map((product) => (
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                </div>
            ))}
        </>
    );
}
 
export default Product;
