import Hero from "@/features/blogsPage/Hero";
import BlogsGrid from "@/features/blogsPage/BlogsGrid";
import { getBlogs } from "@/actions/blog.action";
import { Metadata } from "next";
import { metadatas } from "@/metadatas";

// metadata
export const metadata: Metadata = metadatas.journalsPage;

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
