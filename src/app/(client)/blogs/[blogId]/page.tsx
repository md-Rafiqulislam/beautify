import { TBlogPageProps } from "@/types/blog.type";
import Hero from "@/features/blogPage/Hero";
import BlogPictures from "@/features/blogPage/BlogPictures";
import { getBlog } from "@/actions/blog.action";
import NotFoundPage from "@/app/not-found";

const BlogPage = async ({ params }: TBlogPageProps) => {
    const { blogId } = await params;
    const blog = await getBlog(blogId);

    if (!blog) {
        return <NotFoundPage />;
    }

    return (
        <>
            {/* hero */}
            <Hero blog={blog} />

            {/* blog picture */}
            <BlogPictures blog={blog} />

            {/* blog content */}
            <section className="w-full h-full py-6 bg-linear-to-bl from-purple-50 to-cyan-50">
                <div className="app-container px-2 leading-loose">
                    <p>{blog.content}</p>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
