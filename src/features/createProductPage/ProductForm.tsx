"use client";

import { createProductAction, FormState } from "@/actions/product.create";
import { useActionState } from "react";

const initialState: FormState = {
    success: false,
    message: "",
};

const ProductForm = () => {
    const [state, formAction, isPending] = useActionState(
        createProductAction,
        initialState,
    );

    return (
        <form
            action={formAction}
            className="w-ful max-w-2xl bg-slate-100 p-8 rounded-2xl shadow-xl shadow-slate-100/80 border border-slate-200 space-y-7 transition-all duration-300 mx-auto"
        >
            {/* title */}
            <div className="space-y-1.5">
                <label
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer"
                    htmlFor="title"
                >
                    Product Title &nbsp;<span className="text-blue-500">*</span>
                </label>
                <div className="relative rounded-xl shadow-sm">
                    <input
                        id="title"
                        type="text"
                        name="title"
                        required
                        defaultValue="this is product title" // delete later
                        className={`w-full border p-3 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-4 ${
                            state.errors?.title
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                        }`}
                        placeholder="e.g., Premium Leather Minimalist Wallet"
                    />
                </div>
                {state.errors?.title && (
                    <p className="flex items-center gap-1.5 text-red-500 text-xs font-medium mt-1">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        {state.errors.title[0]}
                    </p>
                )}
            </div>

            {/* short description */}
            <div className="space-y-1.5">
                <label
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer"
                    htmlFor="shortDescription"
                >
                    Short Description
                </label>
                <input
                    id="shortDescription"
                    type="text"
                    name="shortDescription"
                    className="w-full border border-slate-200 p-3 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="A quick one-liner teaser for lists and cards..."
                    defaultValue="this is product short description" // delete later
                />
            </div>

            {/* description */}
            <div className="space-y-1.5">
                <label
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer"
                    htmlFor="description"
                >
                    Detailed Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full border border-slate-200 p-3 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none"
                    placeholder="Tell your customers everything they need to know about specs, build material, and usage instructions..."
                    defaultValue="this is product description" // delete later
                />
            </div>

            {/* price and quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Price */}
                <div className="space-y-1.5">
                    <label
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer"
                        htmlFor="price"
                    >
                        Price ($) &nbsp;<span className="text-blue-500">*</span>
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-medium text-sm">
                            $
                        </div>
                        <input
                            id="price"
                            type="number"
                            name="price"
                            step="0.01"
                            required
                            defaultValue={10} // delete later
                            className={`w-full border p-3 pl-8 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-4 ${
                                state.errors?.price
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            }`}
                            placeholder="0.00"
                        />
                    </div>
                    {state.errors?.price && (
                        <p className="flex items-center gap-1.5 text-red-500 text-xs font-medium mt-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            {state.errors.price[0]}
                        </p>
                    )}
                </div>

                {/* quantity */}
                <div className="space-y-1.5">
                    <label
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
                        htmlFor="quantity"
                    >
                        Stock Quantity &nbsp;
                        <span className="text-blue-500">*</span>
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 cursor-pointer">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                />
                            </svg>
                        </div>
                        <input
                            id="quantity"
                            type="number"
                            name="quantity"
                            required
                            defaultValue={15} // delete later
                            className={`w-full border p-3 pl-9 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-4 ${
                                state.errors?.quantity
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            }`}
                            placeholder="0"
                        />
                    </div>
                    {state.errors?.quantity && (
                        <p className="flex items-center gap-1.5 text-red-500 text-xs font-medium mt-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            {state.errors.quantity[0]}
                        </p>
                    )}
                </div>
            </div>

            {/* pictures */}
            <div className="space-y-1.5">
                <label
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer"
                    htmlFor="pictures"
                >
                    Picture URLs
                </label>
                <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <input
                        id="pictures"
                        type="text"
                        name="pictures"
                        defaultValue="this is product pictures" // delete later
                        className="w-full border border-slate-200 p-3 pl-9 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        placeholder="https://images.com/pic1.jpg, https://images.com/pic2.jpg"
                    />
                </div>
                <p className="text-slate-400 text-[11px] font-medium pl-1">
                    Separate multiple image endpoints with a comma.
                </p>
            </div>

            {/* action message */}
            {state.message && (
                <div
                    className={`p-4 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-all duration-300 animate-fadeIn ${
                        state.success
                            ? "bg-emerald-50 border border-emerald-100 text-emerald-800"
                            : "bg-rose-50 border border-rose-100 text-rose-800"
                    }`}
                >
                    {state.success ? (
                        <svg
                            className="w-4 h-4 text-emerald-600 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-4 h-4 text-rose-600 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}
                    {state.message}
                </div>
            )}

            {/* submit */}
            <button
                type="submit"
                disabled={isPending}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                    isPending
                        ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
                        : "bg-slate-900 hover:bg-slate-800 active:scale-[0.99] shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-slate-900/15"
                }`}
            >
                {isPending ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4 text-slate-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Publishing Item...
                    </>
                ) : (
                    "Create Product"
                )}
            </button>
        </form>
    );
};

export default ProductForm;
