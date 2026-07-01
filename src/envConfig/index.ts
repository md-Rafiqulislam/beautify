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
}