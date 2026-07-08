import { TProductCardProps } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

const EditorProductCard = ({ product }: TProductCardProps) => {
    const hasPicture = product?.pictures ? product.pictures[0] : "/pic.jpg";
    return (
        <article className="group flex flex-col h-full">
            {/* picture */}
            <div className="relative aspect-3/4 overflow-hidden bg-[#F5F5F5] mb-6">
                {/* {product?.badge && (
                    <span className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-black shadow-sm">
                        {product?.badge}
                    </span>
                )} */}
                <Image
                    src={hasPicture}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-linear-to-t from-black/20 to-transparent md:bg-none">
                    <div className="flex flex-col gap-2">
                        <button className="w-full bg-black/90 backdrop-blur-sm text-white py-3.5 text-xs uppercase tracking-widest hover:bg-black transition">
                            Quick Add
                        </button>
                        <Link
                            href={`/products/${product._id}`}
                            className="w-full bg-slate-100/80 backdrop-blur-sm text-slate-950 py-3.5 text-xs uppercase tracking-widest text-center hover:bg-slate-50 transition border border-slate-950/10"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>

            {/* info */}
            <div className="flex flex-col grow">
                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1">
                    {product.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-900 font-semibold">
                        ${product.price}
                    </span>
                    {/* {product?.oldPrice && (
                        <span className="text-xs md:text-sm text-gray-400 line-through">
                            ${product?.oldPrice}
                        </span>
                    )} */}
                </div>
            </div>
        </article>
    );
};

export default EditorProductCard;
