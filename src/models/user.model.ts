import { EUserRole, TUser } from '@/types/user.type';
import { Schema, model, models } from 'mongoose';


// user schema
const userSchema = new Schema<TUser>(
    {
        fullName: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true
        },
        email: {
            type: String,
            required: false,
            unique: true,
            sparse: true, // allow without email
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: false,
            select: false,
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            unique: [true, "User phone number is required."],
            trim: true
        },
        role: {
            type: String,
            enum: Object.values(EUserRole),
            default: EUserRole.CUSTOMER,
            required: [true, "User role is required."]
        },
        address: {
            type: String,
            required: [true, 'Delivery address is required'],
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);


// user model
export const userModel = models.User || model<TUser>('User', userSchema);