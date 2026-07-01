import { AppError } from "@/errors/app-error";

// send error handler
export const sendError = (status: number, message: string) => {
    throw new AppError(status, message);
};