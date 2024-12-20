import React, { useState } from "react";
import RecipeSticker from "../components/RecipeSticker";
import { Link } from "react-router-dom";
import AddRecipeSticker from "../components/AddRecipeSticker";
import { useSelector } from "react-redux";
import {
  selectRecipeError,
  selectRecipeIds,
  selectRecipeStatus,
} from "../store/recipeSlice";
import LoadingSticker from "../components/LoadingSticker";
import ErrorSticker from "../components/ErrorSticker";
import RecipeTable from "../components/RecipeTable";

function ViewRecipe() {
  const [open, setOpen] = useState("card");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  const recipeId = useSelector(selectRecipeIds); // Get Recipe IDs
  const recipeStatus = useSelector(selectRecipeStatus); // Get Recipe Status
  const recipeError = useSelector(selectRecipeError); // Get Recipe Error

  let content;
  if (recipeStatus === "loading") {
    // Loading State
    content = <LoadingSticker />;
  } else if (recipeStatus === "failed") {
    // Error State
    content = <ErrorSticker message={recipeError} />;
  } else if (recipeStatus === "succeeded") {
    // Success State
    content = recipeId.map((id) => <RecipeSticker key={id} recipeId={id} />);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-zinc-900">
      <div className="text-center dark:text-white text-zinc-900 mb-16">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          Discover Delicious Recipes
        </h1>
        <p className="text-xl mb-8 animate__animated animate__fadeInUp">
          Explore a variety of recipes that will tantalize your taste buds!
        </p>

        <Link
          to={"/add-recipe"}
          className="animate__animated animate__fadeIn bg-[#00ADB5] text-[#222831] font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 dark:bg-[#008B8B] dark:text-white dark:hover:bg-[#00ADB5] hover:bg-[#00ADD5]"
        >
          <span className="text-lg font-bold">Add a Recipe</span>
        </Link>
      </div>

      <div className="w-full  px-2 sm:px-14">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="flex justify-center gap-6" aria-label="Tabs">
            <button
              onClick={() => handleTabOpen("card")}
              className={`shrink-0 rounded-lg p-2 text-xl text-center ${
                open === "card"
                  ? "bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-50"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Card
            </button>

            <button
              onClick={() => handleTabOpen("table")}
              className={`shrink-0 rounded-lg p-2 text-xl text-center ${
                open === "table"
                  ? "bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-50"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Table
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Card View */}
          {open === "card" && (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {content}
              <AddRecipeSticker />
            </div>
          )}

          {/* Table View */}
          {open === "table" && <RecipeTable />}
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
