import { TProductsGridProps } from "@/types/product.type";
import EditorProductCard from "./EditorProductCard";

const Trending = ({ products }: TProductsGridProps) => {
    return (
        <section className="w-full h-full py-12 bg-linear-to-b from-sky-100 to-background">
            <div className="app-container px-2">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
                    Trending Essentials
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {products.length > 0 &&
                        products.map((product) => (
                            <EditorProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
