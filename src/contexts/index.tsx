import { TCartContext } from "@/types/cart.type";
import { createContext } from "react";


// cart context
export const CartContext = createContext<TCartContext | undefined>(undefined);
