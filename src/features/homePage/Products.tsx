import { TProductsGridProps } from "@/types/product.type";
import Link from "next/link";
import ProductCard from "./ProductCard";

const Products = ({ products }: TProductsGridProps) => {
    return (
        <section className="w-full h-full bg-linear-to-b from-background to-sky-200">
            <section className="py-12 app-container px-2">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                        Curated For You
                    </h2>
                    <Link
                        href="/products"
                        className="text-sm border-b border-black pb-1 cursor-pointer hover:text-gray-500 transition"
                    >
                        Shop All Categories
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.length > 0 &&
                        products.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                </div>
            </section>
        </section>
    );
};

export default Products;
