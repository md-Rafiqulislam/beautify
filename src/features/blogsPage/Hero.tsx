"use client";

import { Search, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <header className="relative overflow-hidden bg-linear-to-b from-amber-50 to-cyan-50">
            {/* background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-62.5 bg-linear-to-b from-indigo-50/40 to-transparent blur-3xl pointer-events-none" />

            <section className="relative app-container px-2 py-16 flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* badge */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50/80 px-3.5 py-1.5 rounded-full ring-1 ring-indigo-600/10">
                    <Sparkles className="size-3.5 text-indigo-500 animate-pulse" />
                    Our Journal
                </span>

                {/* content */}
                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 max-w-3xl leading-[1.1] sm:leading-[1.05]">
                    Discover elite{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500">
                        cosmetics
                    </span>
                    , skincare, and wellness.
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl font-normal leading-relaxed">
                    Skip the filler. We scout the globe to stock only the most
                    potent, clinical-grade formulas and top-tier beauty
                    brands—bringing high-performance results straight to your
                    vanity.
                </p>

                {/* search */}
                <div className="mt-10 w-full max-w-xl flex flex-col gap-5">
                    {/* search input */}
                    <div className="relative group w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5 transition-colors duration-200 group-focus-within:text-indigo-600" />
                        <input
                            type="text"
                            placeholder="Search articles, topics, or keywords..."
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-500 focus:bg-white transition-all shadow-sm group-hover:border-slate-300"
                        />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Hero;
