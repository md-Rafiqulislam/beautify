import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="min-h-screen w-full flex flex-col justify-center items-center bg-background px-4 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

            <section className="text-center max-w-xl z-10 flex flex-col items-center">
                <h1 className="text-9xl font-black tracking-tighter bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm select-none animate-pulse">
                    404
                </h1>

                <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Lost in space?
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600 max-w-md">
                    The page you are looking for doesn't exist or has been
                    moved. Let's get you back on track.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-linear-to-r from-orange-500 to-pink-500 rounded-xl shadow-lg shadow-orange-500/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                    >
                        Go Back Home
                    </Link>

                    <Link
                        href="/products"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200/60 rounded-xl hover:bg-slate-200/70 hover:text-slate-900 active:scale-[0.98] transition-all text-center"
                    >
                        Browse Products
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NotFoundPage;
