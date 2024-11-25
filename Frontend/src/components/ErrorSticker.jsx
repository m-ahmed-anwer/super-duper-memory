import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";

function ErrorSticker({ message }) {
  return (
    <div className="flex flex-col row-span-2 items-center justify-center text-center space-y-4 p-6 border rounded-lg h-full sm:min-h-[300px] min-h-[180px]  border-red-300 bg-red-50 dark:bg-red-900 dark:border-red-700 text-red-800 dark:text-red-300 ">
      <BsExclamationTriangle
        className="w-16 h-16 text-red-500 dark:text-red-300"
        size={40}
      />

      <h1 className="text-2xl font-semibold">Oops! Something went wrong.</h1>
      <p className="text-lg">
        {message ||
          "We encountered an error while loading the recipes. Please try again later."}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 dark:hover:bg-red-800 transition duration-300"
      >
        Reload Page
      </button>
    </div>
  );
}

export default ErrorSticker;
