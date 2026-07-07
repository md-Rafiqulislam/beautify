import { TBlogCardProps } from "@/types/blog.type";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: TBlogCardProps) => {
    // format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <article className="group flex flex-col bg-slate-50 border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            {/* picture */}
            <div className="aspect-16/10 bg-slate-100 overflow-hidden relative">
                {blog.pictures && blog.pictures.length > 0 ? (
                    <Image
                        width={500}
                        height={500}
                        src={blog.pictures[0]}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-sm">
                        No Preview Image
                    </div>
                )}
            </div>

            {/* content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {formatDate(blog.updatedAt)}
                    </span>
                    {blog.readTime && (
                        <span className="flex items-center gap-1">
                            <Clock className="size-3.5" />
                            {blog.readTime}
                        </span>
                    )}
                </div>

                {/* title & description */}
                <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
                    {blog.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-1">
                    {blog.description.slice(0, 250)}
                </p>

                {/* read link */}
                <Link
                    href={`/blogs/${blog._id}`}
                    className="pt-4 border-t border-slate-200 flex items-center justify-between text-sm font-semibold tracking-wide text-indigo-600"
                >
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="size-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
