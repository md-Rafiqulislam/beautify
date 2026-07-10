import { userModel } from "@/models/user.model";
import { TUser } from "@/types/user.type";


// user service
class UserService {
    constructor() { }


    // create user
    public async createUser(payload: TUser) {
        const result = await userModel.create(payload);
        return result;
    }


    // get users
    public async getUsers() {
        const result = await userModel.find().lean();
        return result;
    }


    // get user
    public async getUserById(id: string) {
        const result = await userModel.findById(id).lean();
        return result;
    }


    // update user
    public async updateUser(id: string, payload: Partial<TUser>) {
        const result = await userModel.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidators: true
            }
        ).lean();
        return result;
    }
}


// export service instance
export const userService = new UserService();