import Image from "next/image";
import Link from "next/link";
import { TProductCardProps } from "@/types/product.type";

const ProductCard = ({ product }: TProductCardProps) => {
    const isOutOfStock = product.quantity === 0;

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-tl-4xl rounded-br-4xl bg-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/50 ease-in-out">
            {/* picture */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={
                        product?.pictures?.[0] ||
                        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
                    }
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    priority={false}
                />

                {/* out of stock overlay */}
                {isOutOfStock && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-200/5 transition-all duration-300">
                        <span className="rounded-full bg-slate-950/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-50 shadow-lg backdrop-blur-md">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* content */}
            <div className="flex flex-1 flex-col justify-between px-2 pt-5 pb-2">
                <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-bold leading-tight text-gray-900 line-clamp-2 transition-colors group-hover:text-blue-600">
                            {product.title}
                        </h3>
                        <span className="shrink-0 text-lg font-black tracking-tight text-gray-900">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>

                    <p className="text-sm font-medium leading-relaxed text-gray-500 line-clamp-2">
                        {product.shortDescription ||
                            product.description?.slice(0, 250)}
                    </p>
                </div>

                {/* actions */}
                <div className="mt-6 pt-4 flex items-center gap-2">
                    {/* details button */}
                    <Link
                        href={`/products/${product._id}`}
                        className="flex flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white py-3.5 text-sm font-bold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 active:scale-[0.95] cursor-pointer text-center"
                    >
                        Details
                    </Link>

                    {/* add to cart button */}
                    <button
                        disabled={isOutOfStock}
                        className={`group/btn relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.95] ${
                            isOutOfStock
                                ? "bg-gray-100 text-gray-400"
                                : "bg-slate-900 text-slate-50 shadow-md hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 cursor-pointer"
                        }`}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {isOutOfStock ? "Unavailable" : "Add to Cart"}

                            {/* plus icon */}
                            {!isOutOfStock && (
                                <svg
                                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            )}
                        </span>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
