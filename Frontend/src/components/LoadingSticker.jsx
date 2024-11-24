import React from "react";

function LoadingSticker() {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 p-6 row-span-2 h-full transition duration-300">
      {/* Pulsating title */}
      <div className="mb-4 h-8 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse"></div>

      {/* Pulsating description lines */}
      <div className="mb-6 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse"></div>
      </div>

      {/* Pulsating paragraph */}
      <div className="flex-grow mb-6 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse"></div>
      </div>

      {/* Loading icons */}
      <div className="flex justify-between mt-auto">
        <div className="w-10 h-10 bg-gray-300 dark:bg-zinc-600 rounded-full animate-spin"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-zinc-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default LoadingSticker;
