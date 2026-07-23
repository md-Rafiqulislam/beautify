import { Types } from "mongoose";

// order status enum
export enum EOrderStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
    RETURNED = "returned"
};


// shipment type
export enum EShipment {
    DHAKA = "dhaka",
    OUTSIDE_DHAKA = "outside-dhaka",
};


// payment type
export enum EPayment {
    ONLINE = "online",
    COD = "cash-on-delivery",
};


// order item type
export type TOrderItem = {
    productId: Types.ObjectId;
    quantity: number;
    price: number;
    total: number;
};


// order type
export type TOrder = {
    userId: Types.ObjectId;
    products: TOrderItem[];
    transportCost: number;
    productsCost: number;
    total: number;
    status: EOrderStatus;
    isDeleted?: boolean;
    shipment: EShipment;
    paymentType: EPayment;
};

