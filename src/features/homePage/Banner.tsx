import Link from "next/link";

const Banner = () => {
    return (
        <section className="h-full w-full">
            <section className="relative h-dvh w-full flex justify-center items-center overflow-hidden px-2">
                {/* picture */}
                <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000"
                    alt="Premium Skincare"
                    className="absolute inset-0 w-full h-full object-cover animate-[pulse_5s_ease-in-out_infinite_alternate]"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-950/40 to-slate-900/20" />

                {/* content */}
                <div className="relative z-10 text-center w-full max-w-3xl px-2 flex flex-col items-center">
                    <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs text-slate-100 mb-4 font-semibold">
                        The Beauty Collection
                    </span>

                    {/* heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                        Radiance, <br className="hidden md:block" /> Redefined.
                    </h1>

                    {/* actions */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full">
                        <Link
                            href="/products"
                            className="group relative w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-background text-foreground overflow-hidden transition-all hover:text-background border border-background"
                        >
                            <span className="relative z-10 text-xs md:text-sm uppercase tracking-widest font-medium whitespace-nowrap">
                                Discover Products
                            </span>
                            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                        </Link>

                        <Link
                            href="/blogs"
                            className="group relative w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-foreground text-background overflow-hidden transition-all hover:text-foreground border border-foreground"
                        >
                            <span className="relative z-10 text-xs md:text-sm uppercase tracking-widest font-medium whitespace-nowrap">
                                Read Journals
                            </span>
                            <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Banner;
