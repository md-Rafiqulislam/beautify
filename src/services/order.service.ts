import { orderModel } from "@/models/order.model";
import { productModel } from "@/models/product.model";
import { TOrder, EOrderStatus } from "@/types/order.type";
import mongoose from "mongoose";

class OrderService {
    constructor() { };

    // create order
    public async createOrder(userId: string, payload: Pick<TOrder, "products" | "shipment" | "paymentType">) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            let productsCost = 0;
            const validatedProducts = [];

            // 1. Verify item contents and match against database prices
            for (const item of payload.products) {
                const dbProduct = await productModel.findById(item.productId).session(session);

                if (!dbProduct) {
                    throw new Error(`Product with ID ${item.productId} not found.`);
                }

                // Optional: Stock availability check
                // if (dbProduct.stock < item.quantity) throw new Error(`${dbProduct.name} is out of stock.`);

                const lineTotal = dbProduct.price * item.quantity;
                productsCost += lineTotal;

                validatedProducts.push({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: dbProduct.price,
                    total: lineTotal,
                });
            }

            // 2. Set shipping fee rules based on destination selection
            const transportCost = payload.shipment === "dhaka" ? 60 : 120;
            const grandTotal = productsCost + transportCost;

            // 3. Assemble full object payload
            const orderData: TOrder = {
                userId,
                products: validatedProducts,
                transportCost,
                productsCost,
                total: grandTotal,
                status: EOrderStatus.PENDING,
                shipment: payload.shipment,
                paymentType: payload.paymentType,
            };

            const [newOrder] = await orderModel.create([orderData], { session });

            // Optional: Handle product inventory stock deduction logic here

            await session.commitTransaction();
            return newOrder;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            await session.endSession();
        }
    }


    // get orders
    async getOrders(query: Record<string, any> = {}) {
        return await orderModel.find({ isDeleted: { $ne: true }, ...query })
            .populate("userId", "fullName email phone")
            .populate("products.productId", "name pictures price")
            .sort({ createdAt: -1 });
    }

    /**
     * Fetch entire history queue belonging to a single client
     */
    async getUserOrders(userId: string) {
        return await orderModel.find({ userId, isDeleted: { $ne: true } })
            .populate("products.productId", "name pictures price")
            .sort({ createdAt: -1 });
    }

    /**
     * Find a singular order entry by its identifier key
     */
    async getOrderById(orderId: string) {
        const order = await orderModel.findOne({ _id: orderId, isDeleted: { $ne: true } })
            .populate("userId", "fullName email phone address")
            .populate("products.productId", "name pictures price");

        if (!order) throw new Error("Order records could not be located.");
        return order;
    }

    /**
     * Advance or change an order progress state tracker string
     */
    async updateOrderStatus(orderId: string, status: EOrderStatus) {
        const order = await orderModel.findByIdAndUpdate(
            orderId,
            { status },
            { new: true, runValidators: true }
        );

        if (!order) throw new Error("Target order records could not be located.");
        return order;
    }

    /**
     * Safe execution hide to ignore records during queries
     */
    async softDeleteOrder(orderId: string) {
        const order = await orderModel.findByIdAndUpdate(
            orderId,
            { isDeleted: true },
            { new: true }
        );

        if (!order) throw new Error("Target order records could not be located.");
        return { success: true, message: "Order removed successfully." };
    }
}

// export order service instance
export const orderService = new OrderService();