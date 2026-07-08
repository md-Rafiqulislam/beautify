"use server";


import { dbConnect } from "@/lib/db-connect-hanlder";
import { productModel } from "@/models/product.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { productValidations } from "@/validations/product.validation";



export type FormState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};

export const createProductAction = async (
    prevState: FormState,
    formData: FormData
): Promise<FormState> => {

    const title = formData.get("title");
    const shortDescription = formData.get("shortDescription");
    const description = formData.get("description");
    const price = formData.get("price")
    const quantity = formData.get("quantity");
    const picturesInput = formData.get("pictures") as string;

    const payload = {
        title,
        shortDescription,
        description,
        price: price ? Number(price) : 0,
        quantity: quantity ? Number(quantity) : 0,
        pictures: picturesInput ? picturesInput.split(",").map((p) => p.trim()) : [],
    };

    const validatedPayload = await productValidations.createProduct.safeParseAsync({ body: payload });

    if (!validatedPayload.success) {
        const formattedErrors: Record<string, string[]> = {};

        validatedPayload.error.issues.forEach((issue) => {
            const fieldName: string = String(issue.path[1] || issue.path[0] || "global");

            if (!formattedErrors[fieldName]) {
                formattedErrors[fieldName] = [];
            }

            formattedErrors[fieldName].push(issue.message);
        });

        return {
            success: false,
            message: "Product validation failed.",
            errors: formattedErrors,
        };
    }

    try {
        await dbConnect();

        await productModel.create(validatedPayload.data.body);

        revalidatePath("/products");
    } catch (error: any) {
        return {
            success: false,
            message: error.message || "Failed to create product in database.",
        };
    }

    redirect("/admin");
}