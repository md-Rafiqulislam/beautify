import { productModel } from "@/models/product.model";
import { TRouteParams } from "@/types/product.type";
import { catchAsync } from "@/utils/catch-async-handler";
import { sendResponse } from "@/utils/send-response-hanlder";


// get product
const GET = catchAsync<TRouteParams>(async (_req, ctx) => {
    const { productId } = await ctx.params;
    const product = await productModel.findById(productId);
    return sendResponse({
        status: 200,
        message: "Product retrived successfully.",
        data: product
    });
});


// update product
const PATCH = catchAsync<TRouteParams>(async (req, ctx) => {
    const { productId } = await ctx.params;
    const body = await req.json();
    const product = await productModel.findByIdAndUpdate(productId, { ...body }, { new: true, runValidators: true });
    return sendResponse({
        status: 200,
        message: "Product updated successfully.",
        data: product
    });
});


// delete product
const DELETE = catchAsync<TRouteParams>(async (_req, ctx) => {
    const { productId } = await ctx.params;
    const product = await productModel.findByIdAndUpdate(productId, { isDeleted: true }, { new: true, runValidators: true });
    return sendResponse({
        status: 200,
        message: "Product deleted successfully.",
        data: product
    });
});


// export methods
export {
    GET,
    PATCH,
    DELETE,
};