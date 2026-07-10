const Ecosystem = () => {
    return (
        <section className="bg-purple-100 py-20 sm:py-32">
            <div className="app-container px-2">
                {/* header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-24">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                        THE QUALITY ASSURANCE
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900">
                        Our 6-Tier Curation Protocol
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-lg mx-auto leading-relaxed">
                        Every premium skincare formula and high-finish jewelry
                        piece undergoes a strict assessment before it is cleared
                        for our local collection.
                    </p>
                </div>

                {/* content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-16">
                    {/* step 1 */}
                    <div className="space-y-3 border-l border-neutral-200 pl-6 relative">
                        <span className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-neutral-900" />
                        <div className="text-xs font-mono text-neutral-400">
                            STAGE 01 / MATERIAL SCREENING
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">
                            Safe Formulas & Hypoallergenic Metals
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            We audit back-labels for both categories. Skincare
                            must be free of toxic fillers, while our jewelry
                            lines are strictly screened for skin-safe,
                            nickel-free, and lead-free foundations to avoid
                            irritation.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-3 border-l border-neutral-200 pl-6 relative">
                        <span className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-neutral-900" />
                        <div className="text-xs font-mono text-neutral-400">
                            STAGE 02 / VISUAL & STRUCTURAL INTEGRITY
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">
                            Active Integrity & High-End Finishes
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            We verify that beauty products contain genuine,
                            active concentrations. For jewelry, we test the
                            multi-layer plating thickness and clasp durability
                            to ensure a heavy, true luxury feel at an accessible
                            price.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-3 border-l border-neutral-200 pl-6 relative">
                        <span className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-neutral-900" />
                        <div className="text-xs font-mono text-neutral-400">
                            STAGE 03 / ETHICAL SUPPLY
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">
                            Cruelty-Free & Responsible Sourcing
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            We partner exclusively with cosmetic brands that
                            reject animal testing pathways, and source our
                            jewelry collections from boutique factories
                            committed to safe, transparent manufacturing
                            standards.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="space-y-3 border-l border-neutral-200 pl-6 relative">
                        <span className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-neutral-900" />
                        <div className="text-xs font-mono text-neutral-400">
                            STAGE 04 / PACKAGING
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">
                            Protective Preservation
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            We select cosmetic products packaged to prevent UV
                            degradation, and ensure every jewelry piece is
                            paired with custom protective inserts or
                            anti-tarnish pouches to preserve its brilliant
                            luster.
                        </p>
                    </div>

                    {/* Step 5 */}
                    <div className="space-y-3 border-l border-neutral-200 pl-6 relative">
                        <span className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-neutral-900" />
                        <div className="text-xs font-mono text-neutral-400">
                            STAGE 05 / LOCAL INSPECTION
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">
                            Freshness Audits & Manual Polishing
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            Before an item hits our local shelves, we confirm
                            batch fresh dates on formulas and hand-polish each
                            piece of jewelry to ensure flawless reflectivity,
                            structural stability, and zero initial surface
                            flaws.
                        </p>
                    </div>

                    {/* Step 6 */}
                    <div className="space-y-3 border-l border-neutral-200 pl-6 relative">
                        <span className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-neutral-900" />
                        <div className="text-xs font-mono text-neutral-400">
                            STAGE 06 / THE VERDICT
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">
                            The Complete Curated Edit
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            Only after aligning with these six benchmarks is a
                            product approved for our online catalog—allowing you
                            to coordinate your daily skincare routine and
                            elegant accessories with absolute confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
