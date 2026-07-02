import Link from "next/link";

const Customer = () => {
    return (
        <section>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">
                Customer Care
            </h4>
            <ul className="space-y-4 text-sm font-light">
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Shipping & Returns
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Track Your Order
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-pink-700 transition-colors"
                    >
                        Accessibility
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Customer;
