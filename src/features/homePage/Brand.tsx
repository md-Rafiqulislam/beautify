import Link from "next/link";

const Brand = () => {
    return (
        <section className="py-0 flex flex-col lg:flex-row bg-sky-100">
            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                    Our Philosophy
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
                    Beauty that cares for your skin and the confidence.
                </h2>
                <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                    We meticulously scout and curate the world’s finest
                    formulas, doing the hard work of filtering out unnecessary
                    fillers for you. What’s left is a premium collection of
                    potent, clinical-grade products that deliver undeniable
                    results.
                </p>
                <Link
                    href="/products"
                    className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-medium border-b border-black pb-1 self-start hover:text-gray-500 hover:border-gray-500 transition"
                >
                    Discover Our Products
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                    </svg>
                </Link>
            </div>
            <div className="w-full lg:w-1/2 h-125 lg:h-auto">
                <img
                    src="https://images.unsplash.com/photo-1617897903246-719242758050?w=600"
                    alt="Texture"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default Brand;
