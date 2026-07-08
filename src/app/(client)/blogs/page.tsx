import { TBlogWithId } from "@/types/blog.type";
import Hero from "@/features/blogsPage/Hero";
import BlogsGrid from "@/features/blogsPage/BlogsGrid";
import { getBlogs } from "@/actions/blog.action";

const BlogsPage = async () => {
    const blogs = await getBlogs();

    return (
        <>
            {/* hero section */}
            <Hero />

            {/* blogs grid */}
            <BlogsGrid blogs={blogs} />
        </>
    );
};

export default BlogsPage;
