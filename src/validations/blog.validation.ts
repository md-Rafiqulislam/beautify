import z from 'zod';


// create blog
const createBlog = z.object({
    body: z.object({
        title: z
            .string({
                error: 'Title is required',
            })
            .trim()
            .min(1, 'Title cannot be empty'),

        description: z
            .string({
                error: 'Description is required',
            })
            .trim()
            .min(1, 'Description cannot be empty'),

        content: z
            .string({
                error: 'Content is required',
            })
            .min(1, 'Content cannot be empty'),

        pictures: z
            .array(z.string({ error: 'Picture URL must be a string' }))
            .optional(),

        isDeleted: z
            .boolean({ error: 'isDeleted must be a boolean' })
            .default(false)
            .optional(),

        readTime: z
            .string({ error: 'Read time must be a string' })
            .optional(),
    }).strict(),
});


// update blog
const updateBlog = z.object({
    body: createBlog.shape.body.partial(),
});


// blog validations
export const blogValidations = {
    createBlog,
    updateBlog,
};