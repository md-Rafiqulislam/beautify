import { TBlogPageProps } from "@/types/blog.type";

const BlogPage = async ({ params }: TBlogPageProps) => {
    const { blogId } = await params;
    return <div>BlogPage</div>;
};

export default BlogPage;
