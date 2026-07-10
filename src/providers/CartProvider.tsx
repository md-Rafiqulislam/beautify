"use client";

import { CartContext } from "@/contexts";
import { TCartItem } from "@/types/cart.type";
import { useState, ReactNode } from "react";

// cart provider
const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<TCartItem[]>([]);

    // add to cart
    const addToCart = (item: TCartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (cartItem) => cartItem.productId === item.productId,
            );
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.productId === item.productId
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem,
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    // remove product
    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.productId !== id));
    };

    // clear cart
    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
