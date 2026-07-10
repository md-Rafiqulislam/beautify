import Link from "next/link";

const Banner = () => {
    return (
        <header className="w-full h-full bg-linear-to-b from-background to-pink-100">
            <section className="app-container px-2 pt-8">
                <div className="pb-10 text-center md:text-left gap-6">
                    <div className="space-y-4">
                        <nav className="text-xs md:text-sm uppercase tracking-widest text-neutral-400 font-medium">
                            <Link href="/" className="hover:text-neutral-600">
                                Home
                            </Link>{" "}
                            / <span className="text-neutral-900">Shop All</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl tracking-tight text-neutral-900 font-semibold">
                            The Conscious Collection
                        </h1>
                    </div>
                    <p className="font-light text-neutral-700 max-w-2xl leading-relaxed mt-4 text-lg">
                        Our signature marketplace of high-performance, non-toxic
                        beauty products—handpicked to simplify your routine and
                        enhance your natural skin health.
                    </p>
                </div>
            </section>
        </header>
    );
};

export default Banner;
