import Footer from "@/components/footer/Footer";
import Header from "@/features/homePage/Header";
import { TChildren } from "@/types/child.type";

const ProductsLayout = ({ children }: TChildren) => {
    return (
        <div className="min-h-dvh flex flex-col">
            {/* header */}
            <Header />

            {/* main page */}
            <main className="grow">{children}</main>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default ProductsLayout;
