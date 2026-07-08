import Banner from "@/features/createProductPage/Banner";
import ProductForm from "@/features/createProductPage/ProductForm";

const CreateProductPage = () => {
    return (
        <>
            {/* banner */}
            <Banner />

            {/* product form */}
            <section className="w-full h-full bg-linear-to-br from-amber-50 via-emerald-50 to-purple-100">
                <div className="app-container py-6">
                    <ProductForm />
                </div>
            </section>
        </>
    );
};

export default CreateProductPage;
