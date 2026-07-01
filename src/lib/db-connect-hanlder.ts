import { config } from "@/envConfig";
import mongoose from "mongoose";


if (!config.dbUrl) {
    throw new Error(
        "Database connection string is missing in envConfig."
    );
}


// mongo cache type
type TMongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}


declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: TMongooseCache | undefined;
}

// initialize cache if it doesn't exist
let cached = globalThis.mongooseCache;

if (!cached) {
    cached = globalThis.mongooseCache = { conn: null, promise: null };
}

export const dbConnect = async (): Promise<typeof mongoose> => {

    if (cached.conn) {
        return cached.conn;
    }


    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            maxPoolSize: 10,
        };

        console.log("Initializing new MongoDB connection pool...");

        cached.promise = mongoose.connect(config.dbUrl as string, opts).then((m) => {
            console.log("MongoDB connected successfully.");
            return m;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        console.error("Critical error establishing MongoDB connection:", error);
        throw error;
    }

    return cached.conn;
};