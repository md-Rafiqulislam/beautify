import { getProduct } from "@/actions/product.action";
import BreadCrumb from "@/features/productPage/BreadCrumb";
import ProductInfo from "@/features/productPage/ProductInfo";
import ProductPictures from "@/features/productPage/ProductPictures";
import { TProductPageProps } from "@/types/product.type";
import { Metadata, ResolvingMetadata } from "next";

// dynamic metadata
export const generateMetadata = async (
    { params }: TProductPageProps,
    parent: ResolvingMetadata,
): Promise<Metadata> => {
    const { productId } = await params;
    const product = await getProduct(productId);

    // fallback
    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested beauty product could not be found.",
        };
    }

    // parrent metadata
    const parentMetadata = await parent;
    const parentKeywords = parentMetadata.keywords || [];

    const title = product.title;
    const description =
        product.shortDescription ||
        `Shop ${title} online at Beautify. High-performance, clean beauty.`;
    const productImage =
        product.pictures && product.pictures.length > 0
            ? product.pictures[0]
            : "/fallback-product-share.jpg";

    return {
        title: title,
        description: description + parentMetadata.description,
        keywords: [...parentKeywords, "buy beauty"],
    };
};

const ProductPage = async ({ params }: TProductPageProps) => {
    const { productId } = await params;
    const product = await getProduct(productId);

    return (
        <>
            {/* bread crumb */}
            <BreadCrumb product={product} />

            {/* product details */}
            <section className="w-full h-full bg-linear-to-b from-background via-blue-200 to-purple-200">
                <div className="app-container px-2 pt-3 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <ProductPictures product={product} />
                        <ProductInfo product={product} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;
