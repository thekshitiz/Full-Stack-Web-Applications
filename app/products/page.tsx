import { products } from "../product-data";
import ProductsList from "../productsList";

export default function Products() {
    // Wrap the returned JSX in parentheses and ensure it starts on the same line as return
    // Also, wrap multiple elements in a single parent fragment (<>...</>)
    // Correct the prop passed to ProductsList
    return (
        <>
            <h1>Products</h1>
            <ProductsList products={products} />
        </>
    );
}
