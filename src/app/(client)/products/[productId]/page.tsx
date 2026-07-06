import BreadCrumb from "@/features/productPage/BreadCrumb";
import ProductInfo from "@/features/productPage/ProductInfo";
import ProductPictures from "@/features/productPage/ProductPictures";
import { TProductPageProps } from "@/types/product.type";

import { TProduct } from "@/types/product.type";

type MockProduct = TProduct & {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
};

export const mockProducts: MockProduct[] = [
    {
        _id: "prod_01j1abcdefg1234567890abc",
        title: "Hydrating Celestial Glow Serum",
        shortDescription:
            "A revolutionary, weightless elixir packed with 12% pure Hyaluronic Acid, Marine Botanicals, and Niacinamide to lock in 48-hour intense moisture and restore natural luminosity.",
        description:
            "Formulated by top dermatologists, our signature Celestial Glow Serum penetrates deep into the skin's epidermal layers to plump fine lines and eliminate dullness. Free from synthetic fragrances, parabens, and sulfates. To use, apply 3-4 drops directly to a clean face and neck every morning and evening before sealing with your favorite heavy moisturizer.",
        price: 48.0,
        quantity: 42,
        pictures: [
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?auto=format&fit=crop&w=800&q=80",
        ],
        isDeleted: false,
        createdAt: "2026-06-15T08:30:00.000Z",
        updatedAt: "2026-07-01T14:22:18.000Z",
    },
    {
        _id: "prod_02j1xyz9876543210fedcba98",
        title: "Overnight Reset Whipped Cream",
        shortDescription:
            "An ultra-rich, luxury night balm designed to accelerate surface cellular turnover while you sleep.",
        description:
            "Infused with non-irritating encapsulated Retinol and Ceramides, this velvety whipped cream deeply repairs the skin moisture barrier overnight. Wake up with firmer, smoother, and intensely hydrated skin. Best suited for dry, normal, and combination skin profiles.",
        price: 64.0,
        quantity: 3,
        pictures: [
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
        ],
        isDeleted: false,
        createdAt: "2026-05-20T11:15:00.000Z",
        updatedAt: "2026-07-05T09:45:12.000Z",
    },
    {
        _id: "prod_03j1deadbeef000011112222",
        title: "Mineral Shield Sun Defense SPF 50+",
        shortDescription:
            "Broad-spectrum, non-greasy physical sunscreen with a completely transparent finish. Zinc-oxide based protection.",
        description:
            "Our ocean-friendly, coral reef-safe SPF 50 formula leaves absolutely zero white cast on any skin tone. It acts as an environmental shield, filtering out both UVA/UVB rays and modern blue light pollution from digital screens. Infused with Vitamin E for an extra layer of antioxidant armor.",
        price: 32.5,
        quantity: 0,
        pictures: [
            "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
        ],
        isDeleted: false,
        createdAt: "2026-04-01T10:00:00.000Z",
        updatedAt: "2026-07-06T18:12:00.000Z",
    },
];

const ProductPage = async ({ params }: TProductPageProps) => {
    const { productId } = await params;
    return (
        <>
            {/* bread crumb */}
            <BreadCrumb product={mockProducts[0]} />

            {/* product details */}
            <section className="w-full h-full bg-linear-to-b from-background via-blue-200 to-purple-200">
                <div className="app-container px-2 pt-3 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <ProductPictures product={mockProducts[0]} />
                        <ProductInfo product={mockProducts[0]} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;
