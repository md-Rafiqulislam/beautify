import { globalErrorHandler } from '@/lib/global-error-handler';
import { NextRequest } from 'next/server';


// api handler type
type TApiHandler = (req: NextRequest, ...args: any) => Promise<Response> | Response;


// catch async
export const catchAsync = (handler: TApiHandler) => {
    return async (req: NextRequest, ...args: any) => {
        try {
            return await handler(req, ...args);
        } catch (error: any) {
            return globalErrorHandler(error);
        }
    };
}