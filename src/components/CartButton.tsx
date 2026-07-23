"use client";

import { TCartButton } from "@/types/cart.type";
import { useCart } from "./CartContext";

const CartButton = ({ children, className, product }: TCartButton) => {

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product._id,
            name: product.title,
            price: product.price,
            image: product?.pictures[0]!,
        });
    };


    return (
        <button onClick={handleAddToCart} className={className}>
            {children}
        </button>
    );
};

export default CartButton;
