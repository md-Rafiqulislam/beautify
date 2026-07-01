import { NextResponse } from "next/server";


// response payload type
type TResponseOptions<T> = {
    status: number;
    success?: boolean;
    message: string;
    data?: T | null;
};


// response handler
export const sendResponse = <T>(payload: TResponseOptions<T>) => {
    return NextResponse.json(
        {
            status: payload.status,
            success: payload.success || true,
            message: payload.message,
            data: payload.data || null,
        },
        {
            status: payload.status
        }
    );
}