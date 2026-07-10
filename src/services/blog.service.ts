import { blogModel } from "@/models/blog.model";
import { TBlog } from "@/types/blog.type";


// blog service
class BlogService {
    constructor() { }

    // create blog
    public async createBlog(payload: TBlog) {
        const result = await blogModel.create(payload);
        return result;
    }

    // get blogs
    public async getBlogs() {
        const result = await blogModel.find().lean();
        return result;
    }

    // get blog
    public async getBlogById(id: string) {
        const result = await blogModel.findById(id).lean();
        return result;
    }

    // update blog
    public async updateBlog(id: string, payload: Partial<TBlog>) {
        const result = await blogModel.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidators: true
            }
        ).lean();
        return result;
    }
};


// export blog service instance
export const blogService = new BlogService();