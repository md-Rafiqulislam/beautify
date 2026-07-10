import { productModel } from "@/models/product.model";
import { TProduct } from "@/types/product.type";


// product service
class ProductService {
    constructor() { }

    // create product
    public async createProduct(payload: TProduct) {
        const result = await productModel.create(payload);
        return result;
    }

    // get products
    public async getProducts() {
        const result = await productModel.find().lean();
        return result;
    }

    // get product
    public async getProduct(id: string) {
        const result = await productModel.findById(id).lean();
        return result;
    }

    // update product
    public async updateProduct(id: string, payload: Partial<TProduct>) {
        const result = await productModel.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidators: true
            }
        ).lean();
        return result;
    }
}


// export product service instance
export const productService = new ProductService();