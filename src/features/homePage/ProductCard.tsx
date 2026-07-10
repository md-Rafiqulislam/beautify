import CartButton from "@/components/CartButton";
import { TProductCardProps } from "@/types/product.type";
import Link from "next/link";

const ProductCard = ({ product }: TProductCardProps) => {
    const hasPicture = product?.pictures ? product.pictures[0] : "/pic.jpg";
    const serializedProduct = JSON.parse(JSON.stringify(product));

    return (
        <article className="group relative h-125 overflow-hidden bg-gray-100">
            {/* picture */}
            <img
                src={hasPicture}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

            {/* text */}
            <div className="absolute bottom-8 left-8 text-slate-100 transition-all duration-500 group-hover:bottom-24">
                <p className="text-xs uppercase tracking-[0.2em] mb-2 opacity-80">
                    {product.shortDescription?.slice(0, 250)}
                </p>
                <h3 className="text-2xl font-serif group-hover:text-purple-300 transition-colors">
                    {product.title}
                </h3>
            </div>

            {/* actions */}
            <div className="absolute bottom-8 left-8 flex gap-3 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {/* client cart button */}
                <CartButton
                    product={serializedProduct}
                    className="px-4 py-2 bg-slate-100 cursor-pointer text-slate-900 text-sm font-semibold rounded-sm hover:bg-purple-300 transition-colors"
                >
                    Add to Cart
                </CartButton>
                <Link
                    href={`/products/${product._id}`}
                    className="px-4 py-2 bg-transparent border border-slate-200 text-slate-50 text-sm font-semibold rounded-sm hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                    Details
                </Link>
            </div>
        </article>
    );
};

export default ProductCard;
