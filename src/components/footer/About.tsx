import Link from "next/link";

const About = () => {
    return (
        <section>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">
                About
            </h4>
            <ul className="space-y-4 text-sm font-light">
                <li>
                    <Link href="#" className="hover:text-pink-700 transition-colors">
                        Our Story
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-pink-700 transition-colors">
                        Ingredients
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-pink-700 transition-colors">
                        Sustainability
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-pink-700 transition-colors">
                        Journal (Blog)
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-pink-700 transition-colors">
                        Careers
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default About;
