import { dbConnect } from "@/lib/db-connect-hanlder";
import { productModel } from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";
import { sendResponse } from "../../../utils/send-response-hanlder";
import { catchAsync } from "@/utils/catch-async-handler";
import { productValidations } from "@/validations/product.validation";


// create product
const POST = async (req: NextRequest) => {
    try {
        await dbConnect();

        const body = await req.json();
        const validatedData = await productValidations.createProduct.parseAsync(body);

        const product = await productModel.create(validatedData);

        sendResponse({
            status: 201,
            message: "Product created successfully.",
            data: product,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                status: 500,
                success: false,
                error: "Internal Server Error",
                message: error.message || "An unexpected error occurred.",
            },
            { status: 500 }
        );
    }
};


// get products
const GET = catchAsync(async (req: NextRequest) => {
    await dbConnect();
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