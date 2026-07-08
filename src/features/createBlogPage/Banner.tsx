import Link from "next/link";

const Banner = () => {
    return (
        <header className="w-full h-full bg-linear-to-br from-yellow-50 via-sky-50 to-cyan-50">
            <section className="relative overflow-hidden py-6">
                {/* background */}
                <div className="absolute right-0 top-0 -mt-4 -mr-4 w-72 h-72 bg-linear-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute left-1/3 bottom-0 w-48 h-48 bg-slate-300/40 rounded-full blur-2xl pointer-events-none" />

                <div className="relative app-container flex flex-col md:flex-row md:items-center md:justify-between gap-6 ">
                    {/* content */}
                    <div className="space-y-2 max-w-xl">
                        {/* back */}
                        <div className="-mb-1">
                            <Link
                                href="/admin"
                                className="inline-flex items-center text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors mb-5 gap-1 group"
                            >
                                <svg
                                    className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                Back to Dashboard
                            </Link>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase">
                            <svg
                                className="w-3 h-3 animate-pulse"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            Workspace Active
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                            Blog Studio
                        </h1>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Craft compelling narratives, document engineering
                            breakthroughs, or share industry insights. Your
                            draft autosaves locally as you type.
                        </p>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Banner;
