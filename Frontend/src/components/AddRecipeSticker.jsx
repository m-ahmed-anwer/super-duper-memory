import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

function AddRecipeSticker() {
  return (
    <Link
      to={"/add-recipe"}
      className="flex flex-col justify-center items-center rounded-lg border border-gray-200 bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 p-6 row-span-2 h-full cursor-pointer group hover:bg-gray-100 dark:hover:bg-[#27272e]"
    >
      <GoPlus
        size={60}
        className="transition duration-200 ease-out transform group-hover:scale-150 text-black dark:text-white"
      />
    </Link>
  );
}

export default AddRecipeSticker;
