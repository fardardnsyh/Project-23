import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-900 h-full">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* <!-- Title --> */}
          <div className="max-w-3xl text-center mx-auto pt-10">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              AI-Powered Cover Letters, Tailored for Success
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-400">
              CoverLetterMate: AI-powered tool crafting tailored cover letters
              to help you stand out and land your dream job.
            </p>
          </div>

          {/* <!-- Buttons --> */}
          <Link href={"/cover-letter"}>
            <div className="text-center my-8">
              <span className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
                Get Started
              </span>
            </div>
          </Link>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
    </div>
  );
}
