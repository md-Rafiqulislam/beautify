"use client";

import { TProductCardProps } from "@/types/product.type";
import { useState } from "react";

const ProductInfo = ({ product }: TProductCardProps) => {
    const { title, shortDescription, description, price, quantity, pictures } =
        product;
    const hasImages = pictures && pictures.length > 0;
    const [orderQuantity, setOrderQuantity] = useState(1);

    const incrementQuantity = () => {
        if (orderQuantity < quantity) {
            setOrderQuantity((prev) => prev + 1);
        }
    };

    const decrementQuantity = () => {
        setOrderQuantity((prev) => Math.max(1, prev - 1));
    };

    const isOutOfStock = quantity === 0;
    return (
        <div className="flex flex-col">
            {/* title */}
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
                {title}
            </h1>

            {/* price */}
            <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-extrabold text-slate-900">
                    ${price.toFixed(2)}
                </span>
                <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                    In Stock & Ready to Ship
                </span>
            </div>

            {/* short description */}
            {shortDescription && (
                <p className="text-slate-600 text-base leading-relaxed mb-8 border-b border-slate-100 pb-6">
                    {shortDescription}
                </p>
            )}

            {/* actions */}
            <div className="space-y-6 mb-8">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Select Quantity
                    </label>

                    <div className="flex gap-4 items-center">
                        {/* counter */}
                        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                            <button
                                onClick={decrementQuantity}
                                disabled={isOutOfStock || orderQuantity <= 1}
                                className="px-4 py-2 text-slate-500 hover:text-slate-900 font-bold disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                &minus;
                            </button>
                            <span className="w-10 text-center text-sm font-bold text-slate-800">
                                {isOutOfStock ? 0 : orderQuantity}
                            </span>
                            <button
                                onClick={incrementQuantity}
                                disabled={
                                    isOutOfStock || orderQuantity >= quantity
                                }
                                className="px-4 py-2 text-slate-500 hover:text-slate-900 font-bold disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                &#43;
                            </button>
                        </div>

                        {/* stock indecator */}
                        <span className="text-xs text-slate-400 font-medium">
                            {quantity > 0
                                ? `${quantity} items available`
                                : "Restocking soon"}
                        </span>
                    </div>
                </div>

                {/* actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                        disabled={isOutOfStock}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none text-white font-bold text-sm py-4 px-6 rounded-xl shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                    </button>
                </div>
            </div>

            {/* bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-slate-100 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                    📦 Safe, Tamper-proof Packaging
                </div>
                <div className="flex items-center gap-2">
                    ⚡ Insured Tracked Courier Delivery
                </div>
                <div className="flex items-center gap-2">
                    🛡️ 100% Authentic Product Guarantee
                </div>
                <div className="flex items-center gap-2">
                    🔄 Easy 14-day Return Window
                </div>
            </div>

            {/* description */}
            {description && (
                <div className="mt-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                        Product Specifications & Description
                    </h3>
                    <div className="prose prose-slate text-sm text-slate-600 leading-relaxed space-y-4">
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;
