"use client";

const NewsLatter = () => {
    return (
        <section className="py-32 bg-linear-to-b from-background to-sky-100 text-center px-4">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-serif mb-4">Enjoy 15% Off</h2>
                <p className="text-gray-500 font-light mb-12">
                    Subscribe to our newsletter to receive your welcome
                    discount, early access to launches, and skincare advice.
                </p>

                <form
                    className="relative flex items-end group"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full bg-transparent border-b border-gray-300 py-3 pl-2 pr-24 focus:outline-none focus:border-black transition-colors peer text-sm"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-0 bottom-3 cursor-pointer text-xs uppercase tracking-widest font-medium text-gray-500 peer-focus:text-black hover:text-black transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsLatter;
