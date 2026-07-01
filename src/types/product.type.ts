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