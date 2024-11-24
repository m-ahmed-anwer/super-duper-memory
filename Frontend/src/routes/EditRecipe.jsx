import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectRecipeById,
  selectRecipeError,
  updateRecipe,
} from "../store/recipeSlice";
import EditForm from "../components/EditForm";
import Toaster from "../utils/Toaster";

const formInitialState = {
  name: "",
  description: "",
  ingredients: [],
};

function EditRecipe() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recipe = useSelector((state) => selectRecipeById(state, recipeId)); // Get Recipe by ID

  const [recipeForm, setRecipeForm] = useState(formInitialState);

  // Populate form state with existing recipe data
  useEffect(() => {
    if (recipe) {
      setRecipeForm({
        name: recipe.name || "",
        description: recipe.description || "",
        ingredients: recipe.ingredients || [],
      });
    }
  }, [recipe]);

  // Handle Recipe Not Found
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Recipe not found!
        </h1>
      </div>
    );
  }

  // Handle form submission
  const handleSubmit = (updatedForm) => {
    if (updatedForm.ingredients.length === 0) {
      Toaster.justToast("error", "Please add at least one ingredient.");
      return;
    }

    const updatedRecipe = {
      ...updatedForm,
      ingredients: updatedForm.ingredients.join(", "),
    };

    // Dispatch Update Recipe
    dispatch(updateRecipe({ recipe: updatedRecipe, recipeId })).then(
      (action) => {
        if (action.payload.success) {
          Toaster.justToast("success", action.payload.message);
          navigate("/");
        } else {
          Toaster.justToast("error", action.payload.message);
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 px-1 py-10 sm:px-6 sm:py-12 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-zinc-800 shadow-lg rounded-lg p-3 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Edit Recipe #ID-{" "}
          <span className="text-[#0d292a] text-base">{recipeId}</span>
        </h1>
        {/* EditForm Component */}
        <EditForm
          recipeForm={recipeForm}
          setRecipeForm={setRecipeForm}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default EditRecipe;
