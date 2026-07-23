import { httpStatus } from "@/httpStatus";
import { globalErrorHandler } from "@/lib/global-error-handler";
import { EUserRole } from "@/types/user.type";
import { sendError } from "@/utils/send-error-handler";
import { NextRequest } from "next/server";


// auth handler
export const auth = async (req: NextRequest, ...allowedRoles: EUserRole[]) => {
    try {
        const clonedReq = req.clone();
        const token = clonedReq.headers.get("authToken") || null;
        if (!token) {
            sendError(httpStatus.unauthorized, "Token not found.");
        }
    } catch (error) {
        return globalErrorHandler(error);
    }
};