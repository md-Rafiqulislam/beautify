"use server";


import { dbConnect } from "@/lib/db-connect-hanlder";
import { blogModel } from "@/models/blog.model";
import { TFormState } from "@/types/action.type";
import { blogValidation } from "@/validations/blog.validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// create blog
export const createBlogAction = async (prevState: TFormState, formData: FormData): Promise<TFormState> => {
    const title = formData.get("title");
    const description = formData.get("description");
    const content = formData.get("content");
    const readTime = formData.get("readTime");
    const picturesInput = formData.get("pictures") as string;

    const payload = {
        title: typeof title === "string" ? title.trim() : "",
        description: typeof description === "string" ? description.trim() : "",
        content: typeof content === "string" ? content : "",
        readTime: typeof readTime === "string" ? readTime.trim() : "",
        pictures: picturesInput ? picturesInput.split(",").map((p) => p.trim()).filter(Boolean) : [],
        isDeleted: false,
    };

    const validatedPayload = await blogValidation.createBlog.safeParseAsync({ body: payload });

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
            ...prevState,
            success: false,
            message: "Product validation failed.",
            errors: formattedErrors,
        };
    }

    try {
        await dbConnect();
        await blogModel.create(payload);

        revalidatePath("/blogs");
    } catch (err: any) {
        return {
            ...prevState,
            success: false,
            message: err.message || "An error occurred writing to MongoDB records.",
        };
    }

    redirect("/admin");
};