import React, { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";

function AddForm({
  name,
  setName,
  description,
  setDescription,
  ingredients,
  handleAddIngredient,
  handleRemoveIngredient,
  onSubmit,
}) {
  const [newIngredient, setNewIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Recipe Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Recipe Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-zinc-700 dark:text-gray-300 border border-transparent rounded-lg focus:ring-0"
          placeholder="Enter recipe name"
          required
        />
      </div>

      {/* Recipe Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-zinc-700 dark:text-gray-300 border border-transparent rounded-lg"
          placeholder="Write a short description about the recipe"
          rows="4"
          required
        />
      </div>

      {/* Ingredients Section */}
      <div>
        <label
          htmlFor="ingredients"
          className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Ingredients
        </label>
        <div className="flex items-center space-x-3 mb-4">
          <input
            type="text"
            id="ingredients"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            className="flex-grow px-4 py-2 text-gray-800 bg-gray-100 dark:bg-zinc-700 dark:text-gray-300 border border-transparent rounded-lg focus:ring-0"
            placeholder="Add an ingredient"
          />
          <button
            type="button"
            onClick={() => {
              handleAddIngredient(newIngredient);
              setNewIngredient("");
            }}
            className="px-4 py-2 bg-[#00ADB5] text-white font-medium rounded-lg hover:bg-[#00ADd5] transition duration-300"
          >
            <HiPlus size={20} />
          </button>
        </div>

        {/* Display Ingredients */}
        {ingredients &&
          ingredients.split(", ").map((ingredient, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 dark:bg-zinc-700 px-4 py-2 rounded-lg my-3"
            >
              <span className="text-gray-800 dark:text-gray-300">
                {ingredient}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveIngredient(ingredient)}
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                <IoMdTrash size={22} />
              </button>
            </div>
          ))}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full rounded-full bg-[#00ADB5] text-white px-6 py-3 font-semibold uppercase transition-all duration-300 hover:bg-[#00ADd5] hover:shadow-md active:bg-[#222831] dark:bg-[#00ADB5] dark:text-white dark:hover:bg-[#393E46] dark:active:bg-[#222831] dark:shadow-none"
        >
          Save Recipe
        </button>
      </div>
    </form>
  );
}

export default AddForm;
