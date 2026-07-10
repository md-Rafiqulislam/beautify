import path from "path";
import { loadEnvFile } from "process";


// load env files
loadEnvFile(path.join(process.cwd(), ".env"));


// envfiles
export const config = {
    dbUrl: process.env.DATABASE_URL as string,
    nodeEnv: process.env.NODE_ENV as string,
    nodeEnv1: process.env.NODE_ENV1 as string,
    nodeEnv2: process.env.NODE_ENV2 as string,
    cldnry: {
        title: process.env.CLOUDINARY_CLOUD_NAME as string,
        key: process.env.CLOUDINARY_API_KEY as string,
        secret: process.env.CLOUDINARY_API_SECRET as string,
    },
}