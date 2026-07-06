import { TProduct, TProductWithId } from '@/types/product.type';



export const mockProducts: TProductWithId[] = [
    {
        _id: 'prod_1',
        title: 'Minimalist Leather Backpack',
        shortDescription: 'Sleek, water-resistant everyday carry. Crafted from premium top-grain leather, this minimalist backpack features a padded 15-inch laptop sleeve, ergonomic shoulder straps, and hidden security pockets. Crafted from premium top-grain leather, this minimalist backpack features a padded 15-inch laptop sleeve, ergonomic shoulder straps, and hidden security pockets.',
        description: 'Crafted from premium top-grain leather, this minimalist backpack features a padded 15-inch laptop sleeve, ergonomic shoulder straps, and hidden security pockets.',
        price: 149.00,
        quantity: 0,
        pictures: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=60'],
        isDeleted: false,
    },
    {
        _id: 'prod_2',
        title: 'Wireless Noise-Cancelling Headphones',
        shortDescription: 'Immersive sound with 40-hour battery life.',
        description: 'Experience pure audio bliss with active hybrid noise cancellation, high-fidelity sound drivers, and ultra-plush memory foam earcups.',
        price: 299.99,
        quantity: 14,
        pictures: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60'],
        isDeleted: false,
    },
    {
        _id: 'prod_3',
        title: 'Ergonomic Mechanical Keyboard',
        shortDescription: 'Hot-swappable tactile switches with RGB.',
        description: 'Designed for ultimate typing comfort and speed. Features premium PBT keycaps, pre-lubed linear switches, and customizable per-key RGB backlighting.',
        price: 89.50,
        quantity: 8,
        pictures: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=60'],
        isDeleted: false,
    },
    {
        _id: 'prod_4',
        title: 'Stainless Steel Water Bottle',
        shortDescription: 'Double-wall vacuum insulated flask.',
        description: 'Keeps your drinks ice-cold for up to 24 hours or piping hot for 12 hours. Made with BPA-free kitchen-grade stainless steel.',
        price: 32.00,
        quantity: 50,
        pictures: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=60'],
        isDeleted: false,
    },
    {
        _id: 'prod_5',
        title: 'Smart Fitness Watch',
        shortDescription: 'AMOLED display with advanced health tracking.',
        description: 'Monitor your health with heart rate, SpO2, and sleep tracking metrics. Features built-in GPS and a stunning 7-day battery life.',
        price: 199.00,
        quantity: 0, // Out of stock to show UX state handling
        pictures: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60'],
        isDeleted: false,
    },
];