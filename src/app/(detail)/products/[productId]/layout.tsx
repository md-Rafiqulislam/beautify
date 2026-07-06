import Footer from "@/components/footer/Footer";
import { TChildren } from "@/types/child.type";

const ProductLayot = ({ children }: TChildren) => {
    return (
        <div className="min-h-dvh flex flex-col">
            {/* main page */}
            <main className="grow">{children}</main>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default ProductLayot;
