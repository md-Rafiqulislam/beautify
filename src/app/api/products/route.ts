
import { productModel } from "@/models/product.model";
import { sendResponse } from "../../../utils/send-response-hanlder";
import { catchAsync } from "@/utils/catch-async-handler";
import { productValidations } from "@/validations/product.validation";


// create product
const POST = catchAsync(async (req) => {
    const body = await req.json();
    const validatedData = await productValidations.createProduct.parseAsync(body);

    const product = await productModel.create(validatedData);

    return sendResponse({
        status: 201,
        message: "Product created successfully.",
        data: product,
    });
});


// get products
const GET = catchAsync(async (_req) => {
    const products = await productModel.find();
    return sendResponse({
        status: 200,
        message: "Products retrived successfully.",
        data: products,
    });
});


// export methods
export {
    POST,
    GET,
};