"use server";


import { dbConnect } from "@/lib/db-connect-hanlder";
import { productModel } from "@/models/product.model";


// get products
export const getProducts = async () => {
    try {
        await dbConnect();
        const products = await productModel.find().lean();
        return products;
    } catch (error) {
        return [];
    }
};


// get product
export const getProduct = async (productId: string) => {
    try {
        await dbConnect();
        const product = await productModel.findById(productId).lean();
        return product;
    } catch (error) {
        return null;
    }
};