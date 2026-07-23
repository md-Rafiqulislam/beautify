import AdminHeader from "@/components/AdminHeader";
import { TChildren } from "@/types/child.type";

const AdminLayout = ({ children }: TChildren) => {
    return (
        <div className="min-h-dvh flex flex-col">
            {/* header */}
            <AdminHeader />

            {/* main page content */}
            <main className="grow">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
