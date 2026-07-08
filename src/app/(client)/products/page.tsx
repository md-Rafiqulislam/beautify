import { getProducts } from "@/actions/product.action";
import Banner from "@/features/productsPage/Banner";
import { ProductsGrid } from "@/features/productsPage/ProductsGrid";

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <>
            {/* banner section */}
            <Banner />

            {/* products grid */}
            <ProductsGrid products={products} />
        </>
    );
};

export default ProductsPage;
