import Image from "next/image";

const Hero = () => {
    return (
        <header className="w-full h-full relative">
            {/* blured gradient */}
            <div className="absolute top-0 right-0 -z-10 w-75 sm:w-150 aspect-square bg-linear-to-bl from-purple-400 via-rose-100 to-transparent blur-[120px] pointer-events-none" />

            <div className="absolute top-0 left-0 -z-10 w-75 sm:w-150 aspect-square bg-linear-to-bl from-orange-200 via-pink-100 to-transparent blur-[120px] pointer-events-none" />

            <section className="app-container px-2 pt-16 pb-12 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* heading */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
                        <span className="text-[10px] sm:text-xs font-mono tracking-[0.5em] text-neutral-500 uppercase block">
                            The Beauty Marketplace Blueprint
                        </span>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight leading-[1.1] text-neutral-900">
                            We edit the noise. <br />
                            <span className="font-light italic text-neutral-500">
                                You experience the results.
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl font-light leading-relaxed">
                            The global cosmetics space is deliberately complex.
                            Every week, thousands of identical white-labeled
                            formulas launch under flashy marketing umbrellas,
                            packed with heavy synthetic fillers designed to give
                            short-term cosmetic slip rather than long-term
                            dermal health.
                        </p>
                        <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed hidden sm:block">
                            We built this digital destination to completely
                            strip away the guesswork. We do not manufacture
                            formulas, giving us the ultimate superpower:
                            **absolute objectivity**. We operate purely as an
                            uncompromised global gatekeeper, stocking only the
                            absolute elite tier of skincare and cosmetic
                            innovations.
                        </p>
                    </div>

                    {/* pictures */}
                    <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative w-full pt-4 lg:pt-0">
                        <div className="col-span-8 aspect-3/4 bg-neutral-100 overflow-hidden rounded-xs border border-neutral-200/40 shadow-xs">
                            <Image
                                width={500}
                                height={500}
                                src="https://images.stockcake.com/public/e/a/4/ea44cd24-8a7b-436a-b1f0-df28d16ca438_large/elegant-beauty-products-stockcake.jpg"
                                alt="Luxury cosmetic products arranged neatly on minimalist boutique glass shelves"
                                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                            />
                        </div>
                        <div className="col-span-4 aspect-square bg-white border border-neutral-200/50 rounded-xs p-3 self-end shadow-md -ml-8 mb-8 z-10 hidden sm:block">
                            <Image
                                width={500}
                                height={500}
                                src="https://framerusercontent.com/images/4RFR3y5RAI1OoqzzOcdgPJu09w.jpg"
                                alt="Minimalist product tubes detailing luxury raw active contents"
                                className="w-full h-full object-contain mix-blend-multiply"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Hero;
