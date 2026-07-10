import { Metadata } from "next";
import { baseDescription, baseKeywords } from "./constants";


// root layout
const rootLayout: Metadata = {
    title: {
        default: "Beautify - A shop of beauty products",
        template: 'Beautify - %s',
    },
    description: baseDescription,
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


// about page
const aboutPage: Metadata = {
    title: "About | Our Curation Philosophy",
    description:
        "Step behind the glass. Explore our exhaustive global sourcing standards, independent testing frameworks, and our unyielding commitment to clean skin science.",
};

// metadatas
export const metadatas = {
    rootLayout,
    homePage,
    productsPage,
    journalsPage,
    aboutPage,
};