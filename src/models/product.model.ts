import { TProduct } from '@/types/product.type';
import { Schema, model, models } from 'mongoose';


// product schema
const productSchema = new Schema<TProduct>(
    {
        title: {
            type: String,
            required: [true, 'Product title is required'],
            trim: true,
        },
        shortDescription: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [0, 'Price cannot be a negative number'],
        },
        quantity: {
            type: Number,
            required: [true, 'Product quantity is required'],
            min: [0, 'Quantity cannot be a negative value'],
        },
        pictures: {
            type: [String],
            default: [],
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


// product model
export const productModel = models.Product || model<TProduct>('Product', productSchema);
