
import { TProductWithId } from "./product.type";
import { TChildWithClassName } from "./child.type";

// cart itme type 
export type TCartItem = {
    productId: string;
    title: string;
    price: number;
    quantity: number;
};


// cart context type
export type TCartContext = {
    cart: TCartItem[];
    addToCart: (item: TCartItem) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}


// Children, className, proudct
export type TCartButton = TChildWithClassName & {
    product: TProductWithId;
}