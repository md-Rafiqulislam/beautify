
import { productModel } from "@/models/product.model";
import { sendResponse } from "../../../utils/send-response-hanlder";
import { catchAsync } from "@/utils/catch-async-handler";
import { productValidations } from "@/validations/product.validation";
import { productService } from "@/services/product.service";
import { httpStatus } from "@/httpStatus";


// create product
const POST = catchAsync(async (req) => {
    const body = await req.json();
    const payload = await productValidations.createProduct.parseAsync({body});

    const product = await productService.createProduct(payload.body);

    return sendResponse({
        status: httpStatus.created,
        message: "Product created successfully.",
        data: product,
    });
});


// get products
const GET = catchAsync(async (_req) => {
    const products = await productService.getProducts();

    return sendResponse({
        status: httpStatus.ok,
        message: "Products retrived successfully.",
        data: products,
    });
});


// export methods
export {
    POST,
    GET,
};