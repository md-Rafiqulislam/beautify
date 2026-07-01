import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative overflow-hidden py-12 lg:py-20">
            <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-pink-200 opacity-70 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-sky-200 opacity-60 blur-3xl" />

            <div className="container max-w-screen-2xl mx-auto px-2">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center text-center lg:text-left lg:col-span-6">
                        <span className="text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
                            Clean • Vegan • Cruelty-Free
                        </span>
                        <h1 className="text-4xl font-serif font-light tracking-tight text-neutral-900 sm:text-5xl md:text-6xl leading-tight">
                            Reveal Your <br />
                            <span className="font-normal italic text-[#b88c76]">
                                Natural Radiance
                            </span>
                        </h1>
                        <p className="mt-6 text-base text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Discover clean skincare and conscious cosmetics
                            crafted to nourish your skin and elevate your daily
                            self-care ritual. Crafted with organic,
                            high-performance botanicals.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/shop"
                                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg"
                            >
                                Shop The Collection
                            </Link>
                            <Link
                                href="/routine-quiz"
                                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-50"
                            >
                                See our Journals
                            </Link>
                        </div>

                        {/* Quick Trust Badges */}
                        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-neutral-200/60 pt-8 max-w-md mx-auto lg:mx-0">
                            <div>
                                <p className="text-xl font-serif text-neutral-900">
                                    100%
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Organic Ingredients
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-serif text-neutral-900">
                                    50k+
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Happy Customers
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-serif text-neutral-900">
                                    Free
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Shipping over $50
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Showcase Block */}
                    <div className="relative lg:col-span-6 flex justify-center">
                        <div className="relative w-full max-w-md sm:max-w-lg aspect-4/5 rounded-[2rem] overflow-hidden bg-neutral-200 shadow-xl">
                            {/* Replace src with your actual image path */}
                            <img
                                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop"
                                alt="Ethereal beauty product setting"
                                className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Overlay Decorative Tag */}
                        <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100">
                            <div className="h-10 w-10 rounded-full bg-[#f3e8ee] flex items-center justify-center text-xl">
                                ✨
                            </div>
                            <div>
                                <p className="text-xs font-medium text-neutral-900">
                                    Best Seller
                                </p>
                                <p className="text-[11px] text-neutral-500">
                                    Glow Serum Balm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
