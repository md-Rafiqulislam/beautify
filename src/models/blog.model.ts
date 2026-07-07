import { TBlog } from '@/types/blog.type';
import { Schema, model, models } from 'mongoose';


// blog schema
const blogSchema = new Schema<TBlog>(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true,
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
        },
        pictures: {
            type: [String],
            required: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        readTime: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


// blog model
export const blogModel = models.Blog || model<TBlog>('Blog', blogSchema);