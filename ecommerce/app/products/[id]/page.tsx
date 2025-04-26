import { products } from "../../product-data";
import Image from "next/image";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === params.id);
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            <Image src={product.imageUrl} alt={product.name} width={400} height={400} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}