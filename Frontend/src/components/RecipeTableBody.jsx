import React, { useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteRecipe, selectRecipeById } from "../store/recipeSlice";
import Toaster from "../utils/Toaster";
import Modal from "./Modal";

function RecipeTableBody({ recipeId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipe = useSelector((state) => selectRecipeById(state, recipeId)); // Get Recipe by ID
  const { name, ingredients, description } = recipe;

  // Delete Click
  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  // Cancel Delete
  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  // Delete Recipe
  const handleConfirmDelete = () => {
    dispatch(deleteRecipe(recipeId))
      .unwrap()
      .then((payload) => {
        if (payload.success) {
          Toaster.justToast("success", payload.message);
        } else {
          Toaster.justToast("error", payload.message);
        }
      })
      .catch((error) => {
        Toaster.justToast("error", "An error occurred during deletion.");
        console.error("Delete Error:", error);
      });

    setIsModalOpen(false);
  };

  return (
    <tr
      onClick={() => navigate(`/view-recipe/${recipeId}`)}
      className="cursor-pointer max-w-screen-lg mx-auto hover:bg-gray-100 dark:hover:bg-[#27272e] bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden"
    >
      <td className="text-lg px-4 py-2 font-medium text-gray-900 dark:text-gray-100">
        {name}
      </td>
      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
        <ul className="text-lgtext-gray-600 dark:text-gray-400 space-y-1">
          {ingredients.map((ingredient, index) => (
            <li key={index}>- {ingredient}</li>
          ))}
        </ul>
      </td>
      <td className="text-lg max-w-60 px-4 py-2 text-gray-700 dark:text-gray-300">
        {description}
      </td>
      <td className="px-4 py-2">
        <Link
          to={`/edit-recipe/${recipeId}`}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:scale-110 transition duration-200 ease-out"
        >
          <MdEdit size={20} />
        </Link>
      </td>
      <td className="px-4 py-2">
        <div
          className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-800 dark:bg-red-700 dark:text-gray-200 rounded-full cursor-pointer hover:bg-red-200 dark:hover:bg-red-600 transform hover:scale-110 transition duration-200 ease-out"
          onClick={handleDeleteClick}
        >
          <LuTrash2 size={20} />
        </div>
      </td>
      <Modal
        isModalOpen={isModalOpen}
        handleCancelDelete={handleCancelDelete}
        handleConfirmDelete={handleConfirmDelete}
      />
    </tr>
  );
}

export default RecipeTableBody;
