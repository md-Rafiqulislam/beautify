// user role enum
export enum EUserRole {
    ADMIN = "admin",
    CUSTOMER = "customer",
};


// user type
export type TUser = {
    fullName: string;
    email?: string;
    password?: string;
    phone: string;
    role: EUserRole;
    address: string;
};