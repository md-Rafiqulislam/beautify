import { TChildren } from "@/types/child.type";
import ClientWrapper from "./ClientWrapper";
import { CartProvider } from "@/components/CartContext";

const Provider = ({ children }: TChildren) => {
    return (
        <ClientWrapper>
            <CartProvider>
                {children}
            </CartProvider>
        </ClientWrapper>
    );
};

export default Provider;
