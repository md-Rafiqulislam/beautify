import { dbConnect } from '@/lib/db-connect-hanlder';
import { globalErrorHandler } from '@/lib/global-error-handler';
import { NextRequest } from 'next/server';



// route context type
type TRouteContext<T extends Record<string, string> = Record<string, string>> = {
    params: Promise<T>;
};



// api hander type
type TApiHandler<T extends Record<string, string> = Record<string, string>> = (
    req: NextRequest,
    ctx: TRouteContext<T>
) => Promise<Response> | Response;



// catch async handler
export const catchAsync = <T extends Record<string, string> = Record<string, string>>(
    handler: TApiHandler<T>
) => {
    return async (req: NextRequest, ctx: TRouteContext<T>) => {
        try {
            await dbConnect();
            return await handler(req, ctx);
        } catch (error: any) {
            return globalErrorHandler(error);
        }
    };
}