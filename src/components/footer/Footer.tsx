import FooterInfo from "./FooterInfo";
import Shop from "./Shop";
import About from "./About";
import Customer from "./Customer";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 font-sans w-full h-full">
            <section className="app-container px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* footer info */}
                    <FooterInfo />

                    {/* shop links */}
                    <Shop />

                    {/* about links */}
                    <About />

                    {/* customer care links */}
                    <Customer />
                </div>

                {/* footer bottom */}
                <FooterBottom />
            </section>
        </footer>
    );
};

export default Footer;
