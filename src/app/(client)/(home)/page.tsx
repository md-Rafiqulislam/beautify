import Banner from "@/features/homePage/Banner";
import Trending from "@/features/homePage/Trendig";
import Products from "@/features/homePage/Products";
import Brand from "@/features/homePage/Brand";
import NewsLatter from "@/features/homePage/NewsLatter";
import { getProducts } from "@/actions/product.action";

const HomePage = async () => {
    const products = await getProducts();
    return (
        <>
            {/* banner section */}
            <Banner />

            {/* products */}
            <Products products={products} />

            {/* editor choich */}
            <Trending products={products} />

            {/* brand */}
            <Brand />

            {/* news latter */}
            <NewsLatter />
        </>
    );
};

export default HomePage;
