import { httpStatus } from "@/httpStatus";
import { blogService } from "@/services/blog.service";
import { TRouteParams } from "@/types/blog.type";
import { catchAsync } from "@/utils/catch-async-handler";
import { sendResponse } from "@/utils/send-response-hanlder";


// get blog
const GET = catchAsync<TRouteParams>(async (_req, ctx) => {

    const { blogId } = await ctx.params;

    const blog = await blogService.getBlog(blogId);

    return sendResponse({
        status: httpStatus.ok,
        message: "Blog retrived successfully.",
        data: blog,
    });
});



// update blog
const PATCH = catchAsync<TRouteParams>(async (req, ctx) => {
    const { blogId } = await ctx.params;
    const body = await req.json();

    const blog = await blogService.updateBlog(blogId, body);

    return sendResponse({
        status: httpStatus.ok,
        message: "Blog updated successfully.",
        data: blog,
    });
});


// delete blog
const DELETE = catchAsync<TRouteParams>(async (_req, ctx) => {
    const { blogId } = await ctx.params;

    const blog = await blogService.updateBlog(blogId, { isDeleted: true });

    return sendResponse({
        status: httpStatus.gone,
        message: "Blog deleted successfully.",
        data: blog,
    });
});


// export methods
export { GET, PATCH, DELETE };