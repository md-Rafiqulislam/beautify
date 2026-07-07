// product type
export type TProduct = {
    title: string;
    shortDescription?: string;
    description?: string;
    price: number;
    quantity: number;
    pictures?: string[]
    isDeleted?: boolean;
};


// product type with id
export type TProductWithId = TProduct & { _id: string };


// product card props
export type TProductCardProps = {
    product: TProductWithId;
}


// product grid props
export type TProductGridProps = {
    products: TProductWithId[];
};


// product page params type
export type TProductPageProps = {
    params: Promise<{
        productId: string;
    }>;
};


// route params
export type TRouteParams = {
    productId: string;
};