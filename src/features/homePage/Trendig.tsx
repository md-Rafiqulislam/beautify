const Trending = () => {
    return (
        <section className="w-full h-full py-12 bg-linear-to-b from-sky-100 to-background">
            <div className="container max-w-screen-2xl mx-auto px-2">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
                    Trending Essentials
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {[
                        {
                            name: "Luminous Foundation",
                            price: 42,
                            oldPrice: null,
                            badge: "New",
                            shades: [
                                "#FFE4C4",
                                "#DEB887",
                                "#D2691E",
                                "#8B4513",
                            ],
                        },
                        {
                            name: "Peptide Eye Cream",
                            price: 58,
                            oldPrice: 65,
                            badge: "Sale",
                            shades: [],
                        },
                        {
                            name: "Botanical Cleanser",
                            price: 28,
                            oldPrice: null,
                            badge: null,
                            shades: [],
                        },
                        {
                            name: "Velvet Lip Tint",
                            price: 22,
                            oldPrice: null,
                            badge: "Bestseller",
                            shades: ["#800000", "#CD5C5C", "#F08080"],
                        },
                    ].map((item, idx) => (
                        <article
                            key={idx}
                            className="group flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-3/4 overflow-hidden bg-[#F5F5F5] mb-6">
                                {item.badge && (
                                    <span className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-black shadow-sm">
                                        {item.badge}
                                    </span>
                                )}
                                <img
                                    src={`https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=${idx + 10}`}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Buttons - Always visible on mobile, slide in on hover for desktop */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-linear-to-t from-black/20 to-transparent md:bg-none">
                                    <div className="flex flex-col gap-2">
                                        <button className="w-full bg-black/90 backdrop-blur-sm text-white py-3.5 text-xs uppercase tracking-widest hover:bg-black transition">
                                            Quick Add
                                        </button>
                                        <a
                                            href={`#`}
                                            className="w-full bg-slate-100/80 backdrop-blur-sm text-slate-950 py-3.5 text-xs uppercase tracking-widest text-center hover:bg-slate-50 transition border border-slate-950/10"
                                        >
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col grow">
                                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1">
                                    {item.name}
                                </h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-sm text-gray-900 font-semibold">
                                        ${item.price}
                                    </span>
                                    {item.oldPrice && (
                                        <span className="text-xs md:text-sm text-gray-400 line-through">
                                            ${item.oldPrice}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
