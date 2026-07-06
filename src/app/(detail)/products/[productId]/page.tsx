import { TProductPageProps } from "@/types/product.type";

const ProductPage = async ({ params }: TProductPageProps) => {
    const { productId } = await params;
    return <>this is product page</>;
};

export default ProductPage;
