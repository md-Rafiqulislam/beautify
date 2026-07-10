const Source = () => {
    return (
        <section className="w-full h-full bg-violet-100">
            <section className="app-container px-2 py-20 sm:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* left column */}
                    <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-12">
                        <span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase block">
                            02 / THE LOCAL ADVANTAGE
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-neutral-900 leading-tight">
                            World-class beauty, held and delivered locally.
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                            We bypass the frustration of international shipping
                            delays, hidden customs duties, and compromised
                            transit conditions. By managing our entire
                            collection right here, we offer a seamless, reliable
                            experience.
                        </p>
                    </div>

                    {/* right column grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                        {/* grid 1 */}
                        <div className="space-y-3 p-6 bg-slate-50/40 border border-neutral-200/30 rounded-xs">
                            <span className="text-xs font-mono text-neutral-400 block">
                                PILLAR 01 / IMMEDIATE DISPATCH
                            </span>
                            <h3 className="text-lg font-medium text-neutral-900">
                                100% Local On-Hand Stock
                            </h3>
                            <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                                Every single bottle, jar, and serum displayed on
                                our platform is physically present in our
                                climate-controlled local hub, ready to ship
                                immediately.
                            </p>
                        </div>

                        {/* grid 2 */}
                        <div className="space-y-3 p-6 bg-slate-50/40 border border-neutral-200/30 rounded-xs">
                            <span className="text-xs font-mono text-neutral-400 block">
                                PILLAR 02 / CLIMATE RELEVANCE
                            </span>
                            <h3 className="text-lg font-medium text-neutral-900">
                                Curated for Our Local Environment
                            </h3>
                            <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                                Different climates require different
                                formulations. We selectively stock products that
                                perform beautifully under our specific local
                                weather, ensuring your skin barrier stays
                                balanced.
                            </p>
                        </div>

                        {/* grid 3 */}
                        <div className="space-y-3 p-6 bg-slate-50/40 border border-neutral-200/30 rounded-xs">
                            <span className="text-xs font-mono text-neutral-400 block">
                                PILLAR 03 / EXPRESS TRANSIT
                            </span>
                            <h3 className="text-lg font-medium text-neutral-900">
                                Premium Doorstep Delivery
                            </h3>
                            <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                                No weeks of waiting for overseas tracking
                                numbers to update. Our dedicated courier network
                                handles your parcel with care, ensuring safe
                                arrival within 24 to 48 hours.
                            </p>
                        </div>

                        {/* grid 4 */}
                        <div className="space-y-3 p-6 bg-slate-50/40 border border-neutral-200/30 rounded-xs">
                            <span className="text-xs font-mono text-neutral-400 block">
                                PILLAR 04 / VERIFIED CHANNELS
                            </span>
                            <h3 className="text-lg font-medium text-neutral-900">
                                Authorized Regional Partners
                            </h3>
                            <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                                We clear out the grey market. We coordinate
                                strictly with officially recognized brand
                                representatives and verified domestic
                                distributors to guarantee product authenticity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Source;
