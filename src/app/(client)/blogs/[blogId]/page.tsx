import { TBlogPageProps } from "@/types/blog.type";
import Hero from "@/features/blogPage/Hero";
import BlogPictures from "@/features/blogPage/BlogPictures";

type TBlogWithId = {
    _id: string;
    title: string;
    description: string;
    content: string;
    pictures: string[];
    readTime: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
};

const MOCK_BLOGS: TBlogWithId[] = [
    {
        _id: "1",
        title: "The Future of Web Development in 2026",
        description:
            "Explore the shifting paradigms in frontend frameworks, serverless architectures, and how AI is altering our daily workflows.",
        content: `
      <p>The landscape of web development is shifting faster than ever. As we navigate through 2026, the boundaries between frontend architectures, edge computing, and AI-driven logic have completely collapsed.</p>
      
      <h3>The AI Workflow Integration</h3>
      <p>AI is no longer just autocomplete; it's a collaborative engine integrated directly into the runtimes. Engineering teams are leveraging real-time codebase synthesis to handle layout boilerplate, leaving human developers to design complex architectural systems, custom state graphs, and micro-interactions.</p>
      
      <blockquote>"The best code is no code at all, and the second best is code generated dynamically by intelligent, self-healing runtime systems."</blockquote>
      
      <h3>The Rise of Edge-Native Runtimes</h3>
      <p>Traditional monolithic server-side rendering has evolved. Micro-frontends deployed globally at the closest edge servers ensure sub-10ms response times worldwide, making performance tuning an intrinsic infrastructural feature rather than a late-stage optimization sprint.</p>

      <h3>Hyper-Personalization and Dynamic Asset Delivery</h3>
      <p>Component hydration models are now smart enough to deliver entirely different structural variants based on user behavior metrics on the fly. We are looking at a future where apps adapt layout structures dynamically to user accessibility demands without triggering layout shifts.</p>
    `,
        pictures: [
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
        ],
        readTime: "5 min read",
        isDeleted: false,
        createdAt: "2026-07-01T10:00:00.000Z",
        updatedAt: "2026-07-01T10:00:00.000Z",
    },
];

const BlogPage = async ({ params }: TBlogPageProps) => {
    const { blogId } = await params;
    const blog = MOCK_BLOGS.find((b) => b._id === blogId) || MOCK_BLOGS[0];

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
