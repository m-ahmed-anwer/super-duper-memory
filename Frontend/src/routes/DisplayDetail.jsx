import React from "react";
import { useSelector } from "react-redux";
import { selectRecipeById } from "../store/recipeSlice";
import { Link, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";

function DisplayDetail() {
  const { recipeId } = useParams();

  const recipe = useSelector((state) => selectRecipeById(state, recipeId));

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Recipe not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid- gap-4 max-w-7xl mx-auto sm:p-28 p-3 bg-white dark:bg-zinc-900">
      <div className="flex flex-col rounded-lg border border-gray-200  p-6 row-span-2 h-full transition duration-300 hover:bg-gray-100 dark:hover:bg-[#27272e] bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800">
        {/* Name Section */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="justify-start text-4xl font-medium leading-tight text-gray-900 dark:text-white">
            {recipe.name}
          </h1>
          <div className="justify-end mt-auto">
            <Link
              to={`/edit-recipe/${recipeId}`}
              className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-800 dark:bg-slate-50 dark:text-zinc-800 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-300 transform hover:scale-110 transition duration-200 ease-out"
            >
              <MdEdit size={20} />
            </Link>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="my-3 text-xl font-medium text-gray-700 dark:text-zinc-400">
            Ingredients
          </h2>
          <ul className="text-lg text-gray-600 dark:text-zinc-400 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>- {ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Description Section */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-zinc-300 mb-6 flex-grow">
          {recipe.description}
        </p>
      </div>
    </div>
  );
}

export default DisplayDetail;
