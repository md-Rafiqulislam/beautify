import Link from "next/link";

const FooterBottom = () => {
    return (
        <section className="pt-8 border-t border-slate-400 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light">
            {/* copy right */}
            <div className="flex gap-4">
                <span>
                    &copy; {new Date().getFullYear()} Beautify. All rights
                    reserved.
                </span>
            </div>

            {/* legal links */}
            <div className="flex gap-6">
                <Link href="#" className="hover:text-sky-800 transition-colors">
                    Privacy Policy
                </Link>
                <Link href="#" className="hover:text-sky-800 transition-colors">
                    Terms of Service
                </Link>
            </div>
        </section>
    );
};

export default FooterBottom;
