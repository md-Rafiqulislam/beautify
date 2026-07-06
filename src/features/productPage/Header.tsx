import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full shadow-md bg-slate-200/80 backdrop-blur-md">
            <section className="flex py-2 app-container items-center justify-between px-2">
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-xl font-black tracking-tight text-slate-950"
                    >
                        Beautify<span className="text-blue-600">.</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                        <Link
                            href="/products"
                            className="hover:text-slate-950 transition-colors"
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-slate-950 transition-colors"
                        >
                            Our Story
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* cart */}
                    <button className="relative rounded-full p-2 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                            0
                        </span>
                    </button>
                </div>
            </section>
        </header>
    );
};

export default Header;
