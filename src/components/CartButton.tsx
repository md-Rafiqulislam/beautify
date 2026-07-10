"use client";

import { TCartButton } from "@/types/cart.type";

const CartButton = ({ children, className, product }: TCartButton) => {
    const handleAddToCart = () => {
        console.log("This product added to cart.", product);
    };

    return (
        <button onClick={handleAddToCart} className={className}>
            {children}
        </button>
    );
};

export default CartButton;
