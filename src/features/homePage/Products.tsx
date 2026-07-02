"use client";

import Link from "next/link";

const Products = () => {
    return (
        <section className="w-full h-full bg-linear-to-b from-background to-sky-200">
            <section className="py-12 container max-w-screen-2xl mx-auto px-2">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                        Curated For You
                    </h2>
                    <span className="text-sm border-b border-black pb-1 cursor-pointer hover:text-gray-500 transition">
                        Shop All Categories
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "The Skincare Edit",
                            subtitle: "Cleanse & Hydrate",
                            img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600",
                        },
                        {
                            title: "Complexion",
                            subtitle: "Flawless Base",
                            img: "https://images.unsplash.com/photo-1512496015851-a1c8485295c3?w=600",
                        },
                        {
                            title: "Body & Spa",
                            subtitle: "Daily Rituals",
                            img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
                        },
                    ].map((cat, i) => (
                        <article
                            key={i}
                            className="group relative h-125 overflow-hidden bg-gray-100"
                        >
                            {/* picture */}
                            <img
                                src={cat.img}
                                alt={cat.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

                            {/* text */}
                            <div className="absolute bottom-8 left-8 text-slate-100 transition-all duration-500 group-hover:bottom-24">
                                <p className="text-xs uppercase tracking-[0.2em] mb-2 opacity-80">
                                    {cat.subtitle}
                                </p>
                                <h3 className="text-2xl font-serif group-hover:text-purple-300 transition-colors">
                                    {cat.title}
                                </h3>
                            </div>

                            {/* actions */}
                            <div className="absolute bottom-8 left-8 flex gap-3 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                <button
                                    onClick={() => console.log("Added to cart")}
                                    className="px-4 py-2 bg-slate-100 cursor-pointer text-slate-900 text-sm font-semibold rounded-sm hover:bg-purple-300 transition-colors"
                                >
                                    Add to Cart
                                </button>
                                <Link
                                    href={`#`}
                                    className="px-4 py-2 bg-transparent border border-white text-white text-sm font-semibold rounded-sm hover:bg-white hover:text-slate-900 transition-colors"
                                >
                                    Details
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Products;
