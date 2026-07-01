import Header from "@/components/Header";
import { TChildren } from "@/types/child.type";

const HomeLayout = ({ children }: TChildren) => {
    return (
        <div className="min-h-dvh flex flex-col">
            {/* header */}
            <Header />
            
            {/* main page */}
            <main>{children}</main>
        </div>
    );
};

export default HomeLayout;
