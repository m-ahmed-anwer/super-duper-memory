import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex justify-center items-center bg-white dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-center">
            {/* Error Code */}
            <h2 className="mb-2 text-[50px] font-bold leading-none text-gray-800 dark:text-gray-100 sm:text-[80px] md:text-[100px]">
              404
            </h2>

            {/* Error Message */}
            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-gray-700 dark:text-gray-200">
              Oops! That page can’t be found
            </h4>

            {/* Description */}
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              The page you are looking for might have been deleted or never
              existed.
            </p>

            {/* Navigation Button */}
            <Link
              to="/"
              className="inline-block rounded-lg border border-gray-800 dark:border-gray-100 px-8 py-3 text-center text-base font-semibold text-gray-800 dark:text-gray-100 transition hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
