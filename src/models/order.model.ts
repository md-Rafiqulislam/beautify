import { Schema, model, models } from "mongoose";
import { EOrderStatus, EShipment, EPayment, TOrder, TOrderItem } from "@/types/order.type";


// order item schema
const orderItemSchema = new Schema<TOrderItem>(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "Product ID is required for order items."]
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is required."],
            min: [1, "Quantity cannot be less than 1."]
        },
        price: {
            type: Number,
            required: [true, "Item price is required."],
            min: [0, "Price cannot be negative."]
        },
        total: {
            type: Number,
            required: [true, "Item total cost calculation is required."]
        }
    },
    { _id: false }
);


// order schema
const orderSchema = new Schema<TOrder>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "An order must belong to a valid user account."]
        },
        products: {
            type: [orderItemSchema],
            validate: {
                validator: (items: TOrderItem[]) => items && items.length > 0,
                message: "An order must contain at least one product item."
            }
        },
        transportCost: {
            type: Number,
            required: [true, "Shipping / Transport fee tracking is required."],
            default: 0,
            min: [0, "Transport costs cannot be negative."]
        },
        productsCost: {
            type: Number,
            required: [true, "Calculated total items base cost is required."],
            min: [0, "Products aggregate base cost cannot be negative."]
        },
        total: {
            type: Number,
            required: [true, "Final grand summary total calculation is required."],
            min: [0, "Grand total balance summary cannot be negative."]
        },
        status: {
            type: String,
            enum: {
                values: Object.values(EOrderStatus),
                message: "{VALUE} is not a supported valid routing status tracker."
            },
            default: EOrderStatus.PENDING,
            required: [true, "Order progression tracker status is required."]
        },
        shipment: {
            type: String,
            enum: {
                values: Object.values(EShipment),
                message: "Shipment location route regional classification layout invalid."
            },
            required: [true, "A logistical regional tracking choice selection is required."]
        },
        paymentType: {
            type: String,
            enum: {
                values: Object.values(EPayment),
                message: "The chosen payment transaction model method layout is invalid."
            },
            required: [true, "Payment verification system transaction mode strategy choice required."]
        },
        isDeleted: {
            type: Boolean,
            default: false,
            select: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

orderSchema.index({ userId: 1 });
orderSchema.index({ status: 1 });


// order model
export const orderModel = models.Order || model<TOrder>("Order", orderSchema);