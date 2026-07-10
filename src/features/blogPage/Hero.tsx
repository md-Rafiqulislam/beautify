import { TBlogCardProps } from "@/types/blog.type";
import { formatDate } from "@/utils/format-date-handler";
import { Calendar, Clock, Sparkles } from "lucide-react";
import BreadCrumb from "./BreadCrumb";

const Hero = ({ blog }: TBlogCardProps) => {
    return (
        <header className="w-full h-full pt-8 sm:pt-16 pb-8 text-center sm:text-left bg-linear-to-br from-amber-100 via-cyan-50 to-purple-100">
            <section className="app-container px-2">
                {/* breadcrumb */}
                <BreadCrumb blog={blog} />

                {/* tags */}
                <div className="flex flex-wrap items-center justify-center  gap-3 text-xs font-semibold text-amber-800 tracking-wider uppercase my-4">
                    <span className="px-2.5 py-1 bg-amber-100/60 rounded-md border border-amber-200/40 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Insights
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500 font-normal normal-case">
                        <Calendar className="w-3.5 h-3.5" />{" "}
                        {formatDate(blog.updatedAt)}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500 font-normal normal-case">
                        <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                    </span>
                </div>

                {/* title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-zinc-900 tracking-tight leading-[1.15] mb-6 text-center">
                    {blog.title}
                </h1>

                {/* description */}
                <p className="text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-3xl text-center mx-auto">
                    {blog.description}
                </p>
            </section>
        </header>
    );
};

export default Hero;
