import { NextResponse } from "next/server";

// global error handler
export const globalErrorHandler = (error: any) => {
    let status: number = error.status || 500;
    let message: string = error.message || "Internal Server Error";

    return NextResponse.json({
        success: false,
        status,
        message,
        error,
    }, { status });
};