import z from "zod";


// login schema
const login = z.object({
    body: z.object({
        email: z
            .string({ error: "Email is required" })
            .min(1, "Email cannot be empty")
            .trim()
            .lowercase(),
        password: z
            .string({ error: "Password is required" })
            .min(6, "Password cannot be empty")
    }).strict(),

});


// export auth validations
export const authValidations = {
    login,
};