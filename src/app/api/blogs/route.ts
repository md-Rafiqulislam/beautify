import { httpStatus } from "@/httpStatus";
import { blogModel } from "@/models/blog.model";
import { blogService } from "@/services/blog.service";
import { catchAsync } from "@/utils/catch-async-handler";
import { sendResponse } from "@/utils/send-response-hanlder";
import { blogValidations } from "@/validations/blog.validation";


// create blogs
const POST = catchAsync(async (req) => {

    const body = await req.json();
    const payload = await blogValidations.createBlog.parseAsync({ body: body });
    const blog = await blogService.createBlog(payload.body);

    return sendResponse({
        status: httpStatus.created,
        message: "Blog created successfully.",
        data: blog,
    });
});


// get blogs
const GET = catchAsync(async (_req) => {

    const blogs = await blogModel.find();

    return sendResponse({
        status: httpStatus.ok,
        message: "Blogs retrived successfully.",
        data: blogs,
    });
});


// export methods
export { POST, GET };