import { TBlogCardProps } from "@/types/blog.type";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const BreadCrumb = ({ blog }: TBlogCardProps) => {
    return (
        <nav className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-medium text-zinc-500 mb-6 sm:mb-8">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
                Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <Link
                href="/blogs"
                className="hover:text-zinc-900 transition-colors"
            >
                Journals
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span className="text-zinc-800 font-semibold truncate max-w-45 sm:max-w-none">
                {blog.title}
            </span>
        </nav>
    );
};

export default BreadCrumb;
