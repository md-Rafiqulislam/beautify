import Banner from "@/features/createBlogPage/Banner";
import BlogForm from "@/features/createBlogPage/BlogForm";

export default async function CreateBlogPage() {
    return (
        <>
            {/* banner */}
            <Banner />

            {/* blog form */}
            <section className="bg-linear-to-br from-yellow-100 via-sky-100 to-cyan-100 py-12 px-2 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="w-full max-w-3xl">
                    <BlogForm />
                </div>
            </section>
        </>
    );
}
