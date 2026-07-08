import { TBlogsGridProps, TBlogWithId } from "@/types/blog.type";
import BlogCard from "./BlogCard";
const BlogsGrid = ({ blogs }: TBlogsGridProps) => {
    return (
        <section className="w-full h-full py-16 bg-linear-to-b from-sky-100 via-indigo-100 to-cyan-100">
            <div className="app-container px-2">
                {blogs.length === 0 ? (
                    <div className="text-center py-20 rounded-3xl border border-slate-300">
                        <p className="text-slate-600 font-medium">
                            No articles matched your search query.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog: TBlogWithId) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogsGrid;
