"use client";

import { useEffect } from "react";
import Link from "next/link";
import { TErrorPageProps } from "@/types/error.type";

const ErrorPage = ({ error, reset }: TErrorPageProps) => {
    useEffect(() => {
        console.error("Application error logged:", error);
    }, [error]);

    return (
        <div className="min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center selection:bg-rose-100">
            {/* ambient background glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center blur-[120px] opacity-30">
                <div className="aspect-square w-100 bg-linear-to-tr from-rose-300 to-amber-200 rounded-full" />
            </div>

            <section className="max-w-md w-full space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-50 text-rose-600 animate-pulse">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                    </svg>
                </div>

                {/* content */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        Something went wrong
                    </h1>
                    <p className="text-base text-neutral-500 max-w-sm mx-auto">
                        We ran into an unexpected issue processing this page.
                        Don't worry, our team has been notified.
                    </p>
                </div>

                {/* action */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                    <button
                        onClick={() => reset()}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-all duration-200"
                    >
                        Try rendering again
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-neutral-200 text-sm font-medium rounded-full text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-all duration-200"
                    >
                        Back to homepage
                    </Link>
                </div>

                {/* error tracking */}
                {error.digest && (
                    <p className="text-xs text-neutral-400 font-mono tracking-wider pt-4">
                        Error ID: {error.digest}
                    </p>
                )}
            </section>
        </div>
    );
};

export default ErrorPage;
