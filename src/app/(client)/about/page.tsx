import Brand from "@/features/aboutPage/Brand";
import ClosingCTA from "@/features/aboutPage/ClosingCTA";
import Ecosystem from "@/features/aboutPage/Ecosystem";
import FAQ from "@/features/aboutPage/FAQ";
import Hero from "@/features/aboutPage/Hero";
import Source from "@/features/aboutPage/Source";
import { metadatas } from "@/metadatas";
import { Metadata } from "next";

// metadata
export const metadata: Metadata = metadatas.aboutPage;

const AboutPage = () => {
    return (
        <>
            {/* hero section */}
            <Hero />

            {/* brand */}
            <Brand />

            {/* global source */}
            <Source />

            {/* ecosystem */}
            <Ecosystem />

            <FAQ />

            {/* closing cta */}
            <ClosingCTA />
        </>
    );
};

export default AboutPage;
