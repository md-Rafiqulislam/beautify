"use client";

import { initialState } from "@/actions/action.prev-state";
import { createBlogAction } from "@/actions/blog.create";
import { useActionState, useState } from "react";

const BlogForm = () => {
    const [state, formAction, isPending] = useActionState(
        createBlogAction,
        initialState,
    );
    const [imageUrl, setImageUrl] = useState<string>("");
    const [imgFallback, setImgFallback] = useState<boolean>(false);

    const handleImageInputChange = (val: string) => {
        // preview
        const firstUrl = val.split(",")[0]?.trim() || "";
        setImageUrl(firstUrl);
        setImgFallback(false);
    };

    return (
        <form
            action={formAction}
            className="w-full bg-slate-100 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200 border border-slate-300/60 space-y-8"
        >
            {/* header */}
            <div className="border-b border-slate-200 pb-6">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Compose New Blog
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                    Share your insights, stories, and technical guides with the
                    world.
                </p>
            </div>

            {/* title , read time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* title */}
                <div className="md:col-span-2 space-y-1.5">
                    <label
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider cursor-pointer"
                        htmlFor="title"
                    >
                        Blog Title &nbsp;
                        <span className="text-blue-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        required
                        id="title"
                        defaultValue="this is blog title"
                        className={`w-full border p-3 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-4 ${
                            state.errors?.title
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                        }`}
                        placeholder="e.g., Mastering Clean Code in Next.js Server Actions"
                    />
                    {state.errors?.title && (
                        <p className="text-red-500 text-xs font-medium mt-1">
                            {state.errors.title[0]}
                        </p>
                    )}
                </div>

                {/* read time */}
                <div className="space-y-1.5">
                    <label
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider cursor-pointer"
                        htmlFor="readTime"
                    >
                        Read Time
                    </label>
                    <input
                        type="text"
                        name="readTime"
                        id="readTime"
                        defaultValue="5 minutes"
                        className="w-full border border-slate-200 p-3 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        placeholder="e.g., 5 min read"
                    />
                </div>
            </div>

            {/* description */}
            <div className="space-y-1.5">
                <label
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider cursor-pointer"
                    htmlFor="description"
                >
                    Short Description &nbsp;
                    <span className="text-blue-500">*</span>
                </label>
                <input
                    type="text"
                    name="description"
                    required
                    id="description"
                    defaultValue="this is blog description"
                    className={`w-full border p-3 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-4 ${
                        state.errors?.description
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                    }`}
                    placeholder="A catchy summary to hook readers from the feed overview..."
                />
                {state.errors?.description && (
                    <p className="text-red-500 text-xs font-medium mt-1">
                        {state.errors.description[0]}
                    </p>
                )}
            </div>

            {/* picture card */}
            <div className="space-y-3">
                <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Cover Image URLs
                    </label>
                    <input
                        type="text"
                        name="pictures"
                        onChange={(e) => handleImageInputChange(e.target.value)}
                        className="w-full border border-slate-200 p-3 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        placeholder="https://domain.com/image1.jpg, https://domain.com/image2.jpg"
                    />
                    <p className="text-slate-400 text-[11px] font-medium pl-1">
                        Separate multiple assets with a comma. The first image
                        acts as the primary layout banner.
                    </p>
                </div>

                {/* preview */}
                <div className="w-full aspect-21/9 rounded-xl overflow-hidden bg-slate-50 border border-dashed border-slate-200 flex items-center justify-center relative">
                    {imageUrl && !imgFallback ? (
                        <img
                            src={imageUrl}
                            alt="Live post cover asset preview"
                            className="w-full h-full object-cover transition-opacity duration-300"
                            onError={() => setImgFallback(true)}
                        />
                    ) : (
                        <div className="text-center p-4 flex flex-col items-center gap-2 text-slate-400">
                            <svg
                                className="w-7 h-7 stroke-[1.5]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                            <span className="text-xs font-semibold tracking-wider uppercase opacity-75">
                                {imgFallback
                                    ? "Invalid / Broken Cover Image Link"
                                    : "No Cover Image Selected"}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* content */}
            <div className="space-y-1.5">
                <label
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider cursor-pointer"
                    htmlFor="content"
                >
                    Article Content <span className="text-blue-500">*</span>
                </label>
                <textarea
                    name="content"
                    required
                    rows={12}
                    id="content"
                    defaultValue="this is blog content"
                    className={`w-full border p-4 rounded-xl text-sm transition-all outline-none duration-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-4 font-mono leading-relaxed resize-y ${
                        state.errors?.content
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                    }`}
                    placeholder="Write your primary blog content body here... Supports long-form narratives or custom syntax markers."
                />
                {state.errors?.content && (
                    <p className="text-red-500 text-xs font-medium mt-1">
                        {state.errors.content[0]}
                    </p>
                )}
            </div>

            {/* dynamic */}
            {state.message && (
                <div
                    className={`p-4 rounded-xl text-sm font-medium flex items-center gap-3 border ${
                        state.success
                            ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                            : "bg-rose-50 border-rose-100 text-rose-800"
                    }`}
                >
                    <span className="h-2 w-2 rounded-full shrink-0 animate-pulse bg-current" />
                    {state.message}
                </div>
            )}

            {/* actions */}
            <button
                type="submit"
                disabled={isPending}
                className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2.5 ${
                    isPending
                        ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                        : "bg-slate-900 hover:bg-slate-800 active:scale-[0.995] shadow-lg shadow-slate-900/5 hover:shadow-xl"
                }`}
            >
                {isPending ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4"
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
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Publishing Post...
                    </>
                ) : (
                    "Publish Article"
                )}
            </button>
        </form>
    );
};

export default BlogForm;
