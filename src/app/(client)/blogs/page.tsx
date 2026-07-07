"use client";

import { useState} from "react";
import { TBlogWithId } from "@/types/blog.type";
import Hero from "@/features/blogsPage/Hero";
import BlogsGrid from "@/features/blogsPage/BlogsGrid";

// mock data
const MOCK_BLOGS: TBlogWithId[] = [
    {
        _id: "1",
        title: "The Future of Web Development in 2026",
        description:
            "Explore the shifting paradigms in frontend frameworks, serverless architectures, and how AI is altering our daily workflows.",
        content: "Full content here...",
        pictures: [
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60",
        ],
        readTime: "5 min read",
        isDeleted: false,
        createdAt: "2026-07-01T10:00:00.000Z",
        updatedAt: "2026-07-01T10:00:00.000Z",
    },
    {
        _id: "2",
        title: "Mastering Clean Code with TypeScript",
        description:
            "Stop writing messy types. Learn advanced structural typing utility strategies to make your codebase scalable and bulletproof.",
        content: "Full content here...",
        pictures: [
            "https://images.unsplash.com/photo-1516116211223-5c359a36298a?w=600&auto=format&fit=crop&q=60",
        ],
        readTime: "8 min read",
        isDeleted: false,
        createdAt: "2026-06-24T14:30:00.000Z",
        updatedAt: "2026-06-25T09:15:00.000Z",
    },
    {
        _id: "3",
        title: "Designing Minimalist User Interfaces",
        description:
            "Why less is genuinely more. A deep dive into spacing, typography scales, and building intentional visual hierarchies.",
        content: "Full content here...",
        pictures: [
            "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?w=600&auto=format&fit=crop&q=60",
        ],
        readTime: "4 min read",
        isDeleted: false,
        createdAt: "2026-05-18T08:00:00.000Z",
        updatedAt: "2026-05-18T08:00:00.000Z",
    },
];

export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    

    return (
        <>
            {/* hero section */}
            <Hero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* blogs grid */}
            <BlogsGrid blogs={MOCK_BLOGS} />
        </>
    );
}
