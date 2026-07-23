"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

const Header = () => {
    const { totalItems } = useCart();

    return (
        <header className="w-full sticky top-0 z-20 backdrop-blur-lg bg-background/80 shadow-md py-2">
            <section className="app-container flex justify-between items-center px-4">
                {/* logo */}
                <Link href="/">
                    <h1 className="font-extrabold text-2xl uppercase tracking-wider bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                        Beautify
                    </h1>
                </Link>

                {/* nav bar */}
                <nav className="hidden md:flex justify-between items-center gap-6 uppercase font-extrabold text-base text-slate-700 tracking-wider">
                    <Link className="hover:text-foreground transition-colors" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-foreground transition-colors" href="/products">
                        Products
                    </Link>
                    <Link className="hover:text-foreground transition-colors" href="/blogs">
                        Journals
                    </Link>
                    <Link className="hover:text-foreground transition-colors" href="/about">
                        About
                    </Link>
                </nav>

                {/* cart button */}
                <Link
                    href="/cart"
                    className="relative flex items-center gap-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-sm"
                >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Cart</span>

                    {/* Dynamic Item Count Badge */}
                    <span className="bg-orange-500 text-white text-[11px] font-bold h-5 w-5 flex items-center justify-center rounded-full ml-0.5">
                        {totalItems}
                    </span>
                </Link>
            </section>
        </header>
    );
};

export default Header;