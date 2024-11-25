import React from "react";
import RecipeSticker from "../components/RecipeSticker";
import Navbar from "../components/Navbar";
import "animate.css";
import { Link } from "react-router-dom";
import AddRecipe from "./AddRecipe";
import AddRecipeSticker from "../components/AddRecipeSticker";
import { useSelector } from "react-redux";
import {
  selectRecipeError,
  selectRecipeIds,
  selectRecipeStatus,
} from "../store/recipeSlice";
import LoadingSticker from "../components/LoadingSticker";
import ErrorSticker from "../components/ErrorSticker";

function ViewRecipe() {
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
    <>
      <div className="px-4 py-12 dark:bg-zinc-900">
        <div className="text-center dark:text-white text-zinc-900 my-32">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
            Discover Delicious Recipes
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeInUp">
            Explore a variety of recipes that will tantalize your taste buds!
          </p>

          <Link
            to={"/add-recipe"}
            className=" animate__animated animate__fadeIn bg-[#00ADB5] text-[#222831] font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 dark:bg-[#008B8B] dark:text-white dark:hover:bg-[#00ADB5] hover:bg-[#00ADD5]"
          >
            <span className="text-lg font-bold">Add Your Recipe</span>
          </Link>
        </div>

        <h2 className="text-5xl leading-tight text-center mb-12 font-mono font-bold text-black dark:text-white animate__animated animate__fadeIn">
          Recipes
        </h2>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {content}
          <AddRecipeSticker />
        </div>
      </div>
    </>
  );
}

export default ViewRecipe;
