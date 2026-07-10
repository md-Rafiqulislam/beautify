import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full sticky top-0 z-20 backdrop-blur-lg bg-background/80 shadow-md py-2">
            <section className="app-container flex justify-between items-center px-2">
                {/* logo */}
                <h1 className="font-extrabold text-2xl uppercase tracking-wider bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Beautify
                </h1>

                {/* nav bar */}
                <nav className="flex justify-between items-center gap-4 uppercase font-extrabold text-lg text-slate-700 tracking-wider">
                    <Link
                        className="hover:text-foreground transition-colors"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="hover:text-foreground transition-colors"
                        href="/products"
                    >
                        Products
                    </Link>
                    <Link
                        className="hover:text-foreground transition-colors"
                        href="/blogs"
                    >
                        Journals
                    </Link>
                    <Link
                        className="hover:text-foreground transition-colors"
                        href="/about"
                    >
                        About
                    </Link>
                </nav>
            </section>
        </header>
    );
};

export default Header;
