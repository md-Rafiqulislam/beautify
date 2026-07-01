"use client";

import Link from "next/link";

const GlobalError = ({
    error,
    unstable_retry,
}: {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}) => {
    return (
        <html lang="en" className="h-full">
            <body className="min-h-screen bg-slate-50 font-sans antialiased m-0 p-0 selection:bg-orange-500/20 flex flex-col justify-center items-center px-4 relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

                <section className="text-center max-w-xl z-10 flex flex-col items-center">
                    <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500 animate-pulse mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-black tracking-tight bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text sm:text-5xl">
                        Critical Error Occurred
                    </h1>

                    <p className="mt-4 text-base leading-7 text-slate-600 max-w-md">
                        A critical layout or application error has interrupted
                        your session. Let's attempt to refresh the system state.
                    </p>

                    {error.digest && (
                        <div className="mt-6 p-3 bg-slate-100 rounded-xl text-xs font-mono text-slate-500 max-w-md break-all border border-slate-200/50">
                            <strong>Error ID (Digest):</strong> {error.digest}
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button
                            onClick={() => unstable_retry()}
                            className="w-full sm:w-auto px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-linear-to-r from-orange-500 to-pink-500 rounded-xl shadow-lg shadow-orange-500/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all text-center cursor-pointer border-0"
                        >
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="w-full sm:w-auto px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 shadow-sm rounded-xl hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] transition-all text-center no-underline"
                        >
                            Force Return Home
                        </Link>
                    </div>
                </section>
            </body>
        </html>
    );
};

export default GlobalError;
