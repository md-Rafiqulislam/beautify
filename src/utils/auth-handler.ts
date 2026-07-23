"use server";

import { cookies } from "next/headers";


// get auth
export const getAuth = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken") || null;
    if (!token) {
        return null;
    }
    return token;
};