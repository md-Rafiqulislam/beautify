import Banner from "@/features/productsPage/Banner";
import { mockProducts } from "@/features/productsPage/productsData";
import { ProductsGrid } from "@/features/productsPage/ProductsGrid";


const ProductsPage = () => {
    return (
        <>
            {/* banner section */}
            <Banner />

            {/* products grid */}
            <ProductsGrid products={mockProducts} />
        </>
    );
};

export default ProductsPage;
