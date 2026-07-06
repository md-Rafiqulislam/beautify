"use client";

import { TProductCardProps } from "@/types/product.type";
import { useState } from "react";

const ProductPictures = ({ product }: TProductCardProps) => {
    const { pictures, title } = product;
    const hasImages = pictures && pictures.length > 0;
    const [activeImage, setActiveImage] = useState(
        hasImages ? pictures[0] : "",
    );

    const isOutOfStock = product.quantity === 0;

    return (
        <div className="flex flex-col gap-4 sticky top-24">
            {/* desplay picture */}
            <div className="aspect-square w-full rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center relative group">
                {hasImages ? (
                    <img
                        src={activeImage}
                        alt={product.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <span className="text-slate-400 text-sm">
                        No image available
                    </span>
                )}

                {/* is stock */}
                {isOutOfStock ? (
                    <span className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        Out of Stock
                    </span>
                ) : product.quantity <= 5 ? (
                    <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        Only {product.quantity} Left!
                    </span>
                ) : null}
            </div>

            {/* all pictures */}
            {hasImages && pictures!.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                    {pictures!.map((pic, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(pic)}
                            className={`aspect-square rounded-xl bg-slate-50 border overflow-hidden cursor-pointer transition-all ${
                                activeImage === pic
                                    ? "border-blue-600 ring-2 ring-blue-100"
                                    : "border-slate-100 hover:border-slate-300"
                            }`}
                        >
                            <img
                                src={pic}
                                alt={`${title} thumb ${idx}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductPictures;
