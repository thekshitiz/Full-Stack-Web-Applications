import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data"; // Removed unused 'products' import here

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div>
            {/* Renamed map parameter to 'product' */}
            {products.map(product => (
                // Added closing </div> tag
                <div key={product.id}>
                    <Link  href={"/products/" + product.id}>
                        {/* Changed 'image' to 'Image' */}
                        <Image src={product.imageUrl} alt={product.name} width={200} height={200} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </Link>
                </div>
            ))} {/* Added closing parenthesis for map */}
        </div>
    ); // Added semicolon (optional but good practice)
} // Added closing curly brace for the function
