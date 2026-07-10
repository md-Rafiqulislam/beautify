import { httpStatus } from "@/httpStatus";
import { productModel } from "@/models/product.model";
import { productService } from "@/services/product.service";
import { TRouteParams } from "@/types/product.type";
import { catchAsync } from "@/utils/catch-async-handler";
import { sendResponse } from "@/utils/send-response-hanlder";


// get product
const GET = catchAsync<TRouteParams>(async (_req, ctx) => {
    const { productId } = await ctx.params;
    const product = await productService.getProduct(productId);

    return sendResponse({
        status: httpStatus.ok,
        message: "Product retrived successfully.",
        data: product
    });
});


// update product
const PATCH = catchAsync<TRouteParams>(async (req, ctx) => {
    const { productId } = await ctx.params;
    const body = await req.json();

    const product = await productService.updateProduct(productId, body);

    return sendResponse({
        status: httpStatus.ok,
        message: "Product updated successfully.",
        data: product
    });
});


// delete product
const DELETE = catchAsync<TRouteParams>(async (_req, ctx) => {
    const { productId } = await ctx.params;

    const product = await productService.updateProduct(productId, {isDeleted: true});
    
    return sendResponse({
        status: httpStatus.ok,
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