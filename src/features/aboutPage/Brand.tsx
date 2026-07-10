const Brand = () => {
    return (
        <section className="bg-purple-100 text-neutral-900 py-20 sm:py-32 relative overflow-hidden w-full h-full">
            {/* gradient background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />

            {/* content */}
            <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
                <h2 className="text-sm font-mono tracking-[0.4em] text-neutral-600 uppercase">
                    The Marketplace Manifesto
                </h2>
                <p className="text-xl sm:text-3xl md:text-4xl font-serif font-light leading-snug sm:leading-relaxed max-w-3xl mx-auto text-neutral-800">
                    &ldquo;Every single item undergoes a rigorous manual
                    inspection right before it is packed and dispatched to you.
                    We verify unbroken security seals, inspect the structural
                    integrity of the packaging, and confirm batch freshness to
                    ensure your order arrives in uncompromised, pristine
                    condition.&rdquo;
                </p>
                <div className="h-px w-20 bg-neutral-700 mx-auto" />
                <p className="text-xs font-mono tracking-widest text-neutral-600 uppercase">
                    EST. 2026 — SECURE COSMETIC PRODUCT GATEWAY
                </p>
            </div>
        </section>
    );
};

export default Brand;
