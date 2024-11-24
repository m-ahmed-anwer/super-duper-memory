import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, selectRecipeById } from "../store/recipeSlice";

function RecipeSticker({ recipeId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const recipe = useSelector((state) => selectRecipeById(state, recipeId));
  const { name, ingredients, description } = recipe;

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteRecipe(recipeId));
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 p-6 row-span-2 h-full transition duration-300 hover:bg-gray-100 dark:hover:bg-[#27272e]">
      {/* Name Section */}
      <h1 className="mb-4 text-4xl font-medium leading-tight text-gray-900 dark:text-white">
        {name}
      </h1>

      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="my-3 text-xl font-medium text-gray-700 dark:text-zinc-400">
          Ingredients
        </h2>
        <ul className="text-lg text-gray-600 dark:text-zinc-400 space-y-1">
          {ingredients.map((ingredient, index) => (
            <li key={index}>- {ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Description Section */}
      <p className="text-lg leading-relaxed text-gray-700 dark:text-zinc-300 mb-6 flex-grow">
        {description}
      </p>

      {/* Action Buttons Section */}
      <div className="flex justify-between mt-auto">
        <Link
          to={`/edit-recipe/${recipeId}`}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-800 dark:bg-slate-50 dark:text-zinc-800 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-300 transform hover:scale-110 transition duration-200 ease-out"
        >
          <MdEdit size={20} />
        </Link>

        <div
          className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-800 dark:bg-red-300 dark:text-zinc-800 rounded-full cursor-pointer hover:bg-red-200 dark:hover:bg-red-400 transform hover:scale-110 transition duration-200 ease-out"
          onClick={handleDeleteClick}
        >
          <LuTrash2 size={20} />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isModalOpen={isModalOpen}
        handleCancelDelete={handleCancelDelete}
        handleConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
}

export default RecipeSticker;
