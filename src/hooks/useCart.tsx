import { CartContext } from "@/contexts";
import { useContext } from "react";

// cart hook
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
