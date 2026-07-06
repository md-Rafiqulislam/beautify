import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { TChildren } from "@/types/child.type";

const ClientLayout = ({ children }: TChildren) => {
    return (
        <div className="flex flex-col min-h-dvh">
            {/* header */}
            <Header />

            {/* main page */}
            <main className="grow">{children}</main>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default ClientLayout;
