import { userModel } from "@/models/user.model";
import { TAuthPayload } from "@/types/auth.type";

// auth service
class AuthService {
    constructor() { };

    // get user
    public async getUser(payload: TAuthPayload) {
        const result = await userModel.findOne({ email: payload.email }).lean();
        return result;
    };
};


// export auth service instance
export const authService = new AuthService();