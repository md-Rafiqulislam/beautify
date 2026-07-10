const FAQ = () => {
    return (
        <section className="bg-neutral-100/60 border-t border-b border-neutral-200/40 py-20 sm:py-32">
            <div className="app-container px-2">
                <div className="text-center space-y-4 mb-12 sm:mb-16">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">
                        SERVICE & TRUST
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900">
                        Your Shopping Essentials
                    </h3>
                </div>

                <div className="space-y-6 sm:space-y-8 divide-y divide-neutral-200/80">
                    {/* authenticity */}
                    <div className="pt-6 first:pt-0 space-y-2">
                        <h4 className="text-base sm:text-lg font-medium text-neutral-900">
                            Are your items 100% original, and do you offer an
                            easy return policy?
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            Absolutely. Every premium skincare formula and
                            curated jewelry piece is sourced directly from
                            authorized regional distributors, guaranteeing 100%
                            authenticity. We back this up with a hassle-free
                            local return policy: if your order arrives with any
                            defects or discrepancies, our local customer support
                            team will quickly arrange a seamless replacement or
                            refund.
                        </p>
                    </div>

                    {/* fast delivary */}
                    <div className="pt-6 space-y-2">
                        <h4 className="text-base sm:text-lg font-medium text-neutral-900">
                            How long does delivery take, and how is my package
                            handled?
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            Because all our stock is managed entirely within our
                            local fulfillment hub, we completely bypass long
                            international transit windows and customs delays.
                            Your items are hand-inspected, safely packaged, and
                            dispatched immediately via premium local
                            couriers—reaching your doorstep within 24 to 96
                            hours with full tracking visibility.
                        </p>
                    </div>

                    {/* cod */}
                    <div className="pt-6 space-y-2">
                        <h4 className="text-base sm:text-lg font-medium text-neutral-900">
                            Do you support Cash on Delivery (COD) options?
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                            Yes. To give you complete peace of mind and full
                            financial security, we offer Cash on Delivery across
                            our entire service network. You only hand over
                            payment once your premium parcel is safely delivered
                            to your hands. For your convenience, we also support
                            secure mobile banking and digital cards at checkout.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
