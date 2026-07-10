import { Metadata } from "next";

// base key words
export const baseKeywords = [
    // brand
    'Beautify', 'beauty products', 'premium cosmetics', 'luxury skincare', 'makeup shop online',

    // trending and hybrid
    'skincare infused makeup', 'serum foundation', 'glowy skin products', 'barrier repair cream',

    // ingredigents
    'exosome skincare', 'hyaluronic acid moisturizer', 'korean glass skin', 'peptide face serum',

    // clean beauty
    'clean beauty essentials', 'vegan cosmetics online', 'buy cosmetics online', 'transformative skincare'
];

// root layout
const rootLayout: Metadata = {
    title: {
        default: "Beautify - A shop of beauty products",
        template: 'Beautify - %s',
    },
    description: "Welcome to Beautify, the ultimate sanctuary for all your beauty needs. We believe that self-care is an art form, which is why we have meticulously curated a comprehensive collection of premium cosmetics, transformative skincare routines, and luxurious beauty essentials all in one place. Whether you are searching for a flawless everyday foundation, a rejuvenating night serum, or the latest bold color palettes, our handpicked selection empowers you to enhance your natural radiance. Step into a world of elegance, discover breakthrough formulas from top global brands, and let us help you redefine your beauty journey.",
    keywords: baseKeywords,
    category: 'ecommerce',
    classification: 'Health, Glow & Beauty',
    applicationName: 'Beautify',
    creator: 'Beautify',
    publisher: 'Beautify',
};


// home page
const homePage: Metadata = {
    title: "Home | Site overview",
    keywords: [...baseKeywords, "beauty blogs"],
};


// products page
const productsPage: Metadata = {
    title: "Products | Beauty Products",
};


// journals page
const journalsPage: Metadata = {
    title: "Journals | Beauty Blogs, Insights",
};


// metadatas
export const metadatas = {
    rootLayout,
    homePage,
    productsPage,
    journalsPage,
};