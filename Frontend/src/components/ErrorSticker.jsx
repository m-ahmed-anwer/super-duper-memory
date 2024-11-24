import React from "react";

function ErrorSticker({ message }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 p-6 border rounded-lg border-red-300 bg-red-50 dark:bg-red-900 dark:border-red-700 text-red-800 dark:text-red-300">
      <svg
        className="w-16 h-16 text-red-500 dark:text-red-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 12l4.95-4.95m-4.95 4.95l-4.95-4.95M12 21.828V2.172M12 21.828L6.343 16.172M12 21.828l5.657-5.656M2.172 12h19.656M2.172 12l5.656-5.657M2.172 12l5.656 5.656"
        />
      </svg>
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
