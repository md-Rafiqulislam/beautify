"use client";

import { TBlogCardProps } from "@/types/blog.type";
import Image from "next/image";
import { useState } from "react";

const BlogPictures = ({ blog }: TBlogCardProps) => {
    const pictures =
        blog?.pictures && blog.pictures.length > 0
            ? blog.pictures
            : ["/pic.jpg"];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full pt-5 pb-10 sm:pb-16 bg-linear-to-bl from-purple-50 via-cyan-50 to-amber-100">
            <div className="app-container px-0 sm:px-4 max-w-6xl mx-auto flex flex-col gap-4">
                {/* main picture */}
                <div className="relative aspect-video w-full sm:rounded-2xl overflow-hidden shadow-xl shadow-zinc-300/40 border border-zinc-200/50 bg-zinc-100">
                    <Image
                        fill
                        priority
                        src={pictures[activeIndex]}
                        alt={`${blog.title} - View ${activeIndex + 1}`}
                        sizes="(max-w-1024px) 100vw, 1024px"
                        className="object-cover select-none transition-all duration-500 ease-out"
                    />

                    {/* badge */}
                    {pictures.length > 1 && (
                        <div className="absolute bottom-4 right-4 bg-zinc-900/70 backdrop-blur-md text-slate-50 text-xs font-medium px-2.5 py-1 rounded-full select-none tracking-wider">
                            {activeIndex + 1} / {pictures.length}
                        </div>
                    )}
                </div>

                {/* more pictures if have */}
                {pictures.length > 1 && (
                    <div className="w-full px-4 sm:px-0">
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x snap-mandatory sm:grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 sm:overflow-visible">
                            {pictures.map((pic, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative aspect-video w-24 sm:w-full shrink-0 snap-start rounded-lg overflow-hidden border-2 transition-all outline-none ${
                                        activeIndex === idx
                                            ? "border-amber-600 shadow-md ring-2 ring-amber-600/20 scale-[0.98]"
                                            : "border-transparent hover:border-zinc-300 bg-zinc-100 opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <Image
                                        fill
                                        src={pic}
                                        alt={`Thumbnail ${idx + 1}`}
                                        sizes="(max-w-640px) 96px, 150px"
                                        className="object-cover select-none"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogPictures;
