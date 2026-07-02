import Link from "next/link";

const Shop = () => {
    return (
        <section>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">
                Shop
            </h4>
            <ul className="space-y-4 text-sm font-light">
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Skincare
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Makeup
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Body & Spa
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Fragrance
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Bestsellers
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Shop;
