import Banner from "@/features/homePage/Banner";
import EditorChoice from "@/features/homePage/Trendig";
import Products from "@/features/homePage/Products";
import Brand from "@/features/homePage/Brand";
import NewsLatter from "@/features/homePage/NewsLatter";

const HomePage = () => {
    return (
        <>
            {/* banner section */}
            <Banner />

            {/* products */}
            <Products />

            {/* editor choich */}
            <EditorChoice />

            {/* brand */}
            <Brand />

            {/* news latter */}
            <NewsLatter />
        </>
    );
};

export default HomePage;
