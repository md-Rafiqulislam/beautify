import { TBlogPageProps } from "@/types/blog.type";
import Hero from "@/features/blogPage/Hero";
import BlogPictures from "@/features/blogPage/BlogPictures";
import { getBlog } from "@/actions/blog.action";
import NotFoundPage from "@/app/not-found";
import { Metadata, ResolvingMetadata } from "next";

// dynamic metadata
export const generateMetadata = async (
    { params }: TBlogPageProps,
    parent: ResolvingMetadata,
): Promise<Metadata> => {
    const { blogId } = await params;
    const blog = await getBlog(blogId);

    // fallback
    if (!blog) {
        return {
            title: "Article Not Found",
            description: "The requested beauty article could not be found.",
        };
    }

    // parent metadata
    const parentMetadata = await parent;
    const parentKeywords = parentMetadata.keywords || [];

    const dynamicDescription =
        blog.shortDescription || blog.content?.slice(0, 160) + "...";
    const blogImage =
        blog.pictures && blog.pictures.length > 0
            ? blog.pictures[0]
            : "/default-blog-share.jpg";

    return {
        title: blog.title,
        description: dynamicDescription + parentMetadata.description,
        keywords: [...parentKeywords, "beauty tips", "skincare trends"],
    };
};

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
