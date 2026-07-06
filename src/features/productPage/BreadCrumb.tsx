import { TProductCardProps } from "@/types/product.type";
import Link from "next/link";

const BreadCrumb = ({ product }: TProductCardProps) => {
    return (
        <nav className="w-full h-full py-6">
            <section className="app-container px-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Link href="/" className="hover:text-slate-900">
                        Home
                    </Link>
                    <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <Link href="/shop" className="hover:text-slate-900">
                        Products
                    </Link>
                    <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <span className="text-slate-900 truncate max-w-50">
                        {product.title}
                    </span>
                </div>
            </section>
        </nav>
    );
};

export default BreadCrumb;
