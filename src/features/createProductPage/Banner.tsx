const Banner = () => {
    return (
        <section className="w-full h-full bg-linear-to-br from-cyan-50 via-purple-100 to-sky-100">
            <div className="app-container flex justify-center items-center py-10 px-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Create New Product
                    </h1>
                    <p className="text-sm text-gray-600 mb-8">
                        Fill in the details below to add a new item to your
                        online storefront catalog.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
