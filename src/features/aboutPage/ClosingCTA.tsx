import Link from "next/link";

const ClosingCTA = () => {
    return (
        <section className="w-full h-full relative bg-slate-100">
            <div className="absolute inset-0 -z-10 flex items-center justify-center blur-[120px] opacity-15 pointer-events-none">
                <div className="aspect-square w-62.5 sm:w-125 bg-purple-400 rounded-full animate-pulse" />
            </div>
            <section className="py-24 sm:py-40 text-center app-container px-2 relative">
                <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-neutral-900 leading-tight">
                        Elevate your vanity standard.
                    </h2>
                    <p className="text-xs sm:text-base text-neutral-500 font-light leading-relaxed max-w-xl mx-auto">
                        Skip the marketing gimmicks and white-labeled fillers.
                        Discover a carefully vetted selection of
                        high-performance beauty, sourced to support your natural
                        skin health.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link
                            href="/products"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 rounded-xs shadow-sm"
                        >
                            Explore The Verified Edit
                        </Link>
                        <Link
                            href="/blogs"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-neutral-300 bg-transparent hover:bg-neutral-100 text-neutral-800 text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 rounded-xs"
                        >
                            Read Our Journal
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ClosingCTA;
