import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecipe,
  selectRecipeError,
  selectRecipeStatus,
} from "../store/recipeSlice";
import { useNavigate } from "react-router-dom";
import AddForm from "../components/AddForm";
import Toaster from "../utils/Toaster";

function AddRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  const recipeStatus = useSelector(selectRecipeStatus); // Get Recipe Status
  const recipeError = useSelector(selectRecipeError); // Get Recipe Error

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!ingredients.trim()) {
      // Validation
      Toaster.justToast("error", "Please add at least one ingredient.");
      return;
    }

    if (recipeStatus === "failed") {
      Toaster.justToast("error", recipeError);
      return;
    }

    const recipe = { name, description, ingredients };

    // Dispatch Add Recipe
    dispatch(addRecipe(recipe)).then((action) => {
      if (action.payload.success) {
        Toaster.justToast("success", action.payload.message);
        navigate("/");
      } else {
        Toaster.justToast("error", action.payload.message);
      }
    });
  };

  // Add Ingredient
  const handleAddIngredient = (newIngredient) => {
    if (newIngredient.trim()) {
      setIngredients((prevIngredients) =>
        prevIngredients
          ? `${prevIngredients}, ${newIngredient.trim()}`
          : newIngredient.trim()
      );
    }
  };

  // Remove Ingredient
  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredients((prevIngredients) => {
      const ingredientsList = prevIngredients
        .split(", ")
        .filter((ingredient) => ingredient !== ingredientToRemove);
      return ingredientsList.join(", ");
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 px-1 py-10 sm:px-6 sm:py-12 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-zinc-800 shadow-lg rounded-lg p-3 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Add a New Recipe
        </h1>
        {/* AddForm Component */}
        <AddForm
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          ingredients={ingredients}
          handleAddIngredient={handleAddIngredient}
          handleRemoveIngredient={handleRemoveIngredient}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddRecipe;
