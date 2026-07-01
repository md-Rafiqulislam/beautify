import { NextRequest, NextResponse } from 'next/server';


// api handler type
type TApiHandler = (req: NextRequest, ...args: any) => Promise<Response> | Response;


// catch async
export const catchAsync = (handler: TApiHandler) => {
    return async (req: NextRequest, ...args: any) => {
        try {
            return await handler(req, ...args);
        } catch (error: any) {

            let status = error.status || 500;
            let message = error.message || 'Internal Server Error';

            // send response
            return NextResponse.json(
                {
                    success: false,
                    status,
                    error: message,
                },
                { status }
            );
        }
    };
}