import { dbConnect } from "@/lib/db-connect-hanlder";
import { productModel } from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";
import { sendResponse } from "../../../utils/send-response-hanlder";


// create product
const POST = async (req: NextRequest) => {
    try {
        await dbConnect();

        const body = await req.json();

        const newProduct = await productModel.create(body);

        sendResponse({
            status: 201,
            message: "Product created successfully.",
            data: newProduct,
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


// export methods
export {
    POST,
};