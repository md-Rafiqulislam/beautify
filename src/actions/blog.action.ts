"use server";


import { dbConnect } from "@/lib/db-connect-hanlder";
import { blogModel } from "@/models/blog.model";
import { TBlogOrNull, TBlogWithId } from "@/types/blog.type";


// get blogs
export const getBlogs = async () => {
    try {
        await dbConnect();
        const blogs = await blogModel.find();
        if (!blogs) {
            return [];
        }
        return blogs;
    } catch (error) {
        return [];
    }
};


// get blog
export const getBlog = async (blogId: string) => {
    try {
        await dbConnect();
        const blog: TBlogOrNull = await blogModel.findById(blogId).lean();
        if (!blog) {
            return null;
        }
        if (blog.isDeleted) {
            return null;
        }
        return JSON.parse(JSON.stringify(blog));
    } catch (error) {
        return null;
    }
};