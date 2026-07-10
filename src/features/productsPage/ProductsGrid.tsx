import { TProductsGridProps, TProductWithId } from "@/types/product.type";
import ProductCard from "./ProductCard";

export const ProductsGrid = ({ products }: TProductsGridProps) => {
    if (products.length === 0) {
        return (
            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
                <p className="text-sm text-slate-500">
                    No products found matching your selection.
                </p>
            </div>
        );
    }

    return (
        <section className="w-full h-full bg-linear-to-b from-pink-100 via-violet-200 to-blue-200 py-6">
            <div className="app-container px-2">
                <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product: TProductWithId) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
