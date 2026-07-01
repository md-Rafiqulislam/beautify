import { config } from "@/envConfig";
import mongoose from "mongoose";


// db connect
export const dbConnect = async () => { 
    try {
        await mongoose.connect(config.dbUrl as string);
    } catch (error) {
        console.log("could not connect the database.");
    }
};