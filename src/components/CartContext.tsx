"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Add item to cart (increments quantity if already exists)
    const addToCart = (product: Omit<CartItem, "quantity">, quantity = 1) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                return prevCart.map((item, index) =>
                    index === existingIndex
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity }];
        });
    };

    // Remove single item
    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // Increment / Decrement quantity
    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) =>
            prev
                .map((item) => {
                    if (item.id === id) {
                        const newQty = item.quantity + delta;
                        return newQty > 0 ? { ...item, quantity: newQty } : item;
                    }
                    return item;
                })
        );
    };

    // Clear all
    const clearCart = () => setCart([]);

    // Computed values
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};