import { blogModel } from "@/models/blog.model";
import { catchAsync } from "@/utils/catch-async-handler";
import { sendResponse } from "@/utils/send-response-hanlder";


// create blogs
const POST = catchAsync(async (req) => {
    const body = await req.json();
    const blog = await blogModel.create(body);
    return sendResponse({
        status: 201,
        message: "Blog created successfully.",
        data: blog,
    });
});


// export methods
export { POST };