import z from "zod";


// create product
const createProduct = z.object({
    body: z.object({
        title: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? 'Product title is required'
                    : 'Product title must be a string',
        })
        .trim()
        .min(1, { error: 'Product title is required' }),

    shortDescription: z
        .string({ error: 'Short description must be a string' })
        .trim()
        .optional(),

    description: z
        .string({ error: 'Description must be a string' })
        .trim()
        .optional(),

    price: z
        .number({
            error: (issue) =>
                issue.input === undefined
                    ? 'Product price is required'
                    : 'Product price must be a number',
        })
        .min(0, { error: 'Price cannot be a negative number' }),

    quantity: z
        .number({
            error: (issue) =>
                issue.input === undefined
                    ? 'Product quantity is required'
                    : 'Product quantity must be a number',
        })
        .min(0, { error: 'Quantity cannot be a negative value' }),

    pictures: z
        .array(z.string({ error: 'Each picture URL must be a string' }))
        .default([]),

    isDeleted: z
        .boolean({ error: 'isDeleted must be a boolean' })
        .default(false),
    }),
    
});


// update product
const updateProduct = createProduct.partial();


// product validations
export const productValidations = {
    createProduct,
    updateProduct,
};