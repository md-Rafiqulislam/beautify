import { userModel } from "@/models/user.model";
import { dbConnect } from "./db-connect-hanlder";
import { EUserRole } from "@/types/user.type";


// seed admin
export const seedUser = async () => {
    try {
        // connect db
        await dbConnect();

        const isAdminExists = await userModel.findOne({ role: "admin" });

        if (isAdminExists) {
            console.log("Admin user already seeded.");
            return;
        }

        // payload
        const payload = {
            fullName: "System Admin",
            email: "admin@admin.com",
            password: "123456",
            phone: "+1234567890",
            role: EUserRole.ADMIN,
            address: "System Main Headquarters",
        };

        // create admin
        const result = await userModel.create(payload);

        console.log("Admin user seeded successfully:", result.fullName);
        return result;
    } catch (error) {
        console.error("Error seeding admin user:", (error as Error).message);
        throw error;
    }
};