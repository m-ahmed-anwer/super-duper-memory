import React from "react";
import RecipeTableBody from "./RecipeTableBody";
import { useSelector } from "react-redux";
import {
  selectRecipeError,
  selectRecipeIds,
  selectRecipeStatus,
} from "../store/recipeSlice";

function RecipeTable() {
  const recipeId = useSelector(selectRecipeIds); // Get Recipe IDs
  const recipeStatus = useSelector(selectRecipeStatus); // Get Recipe Status
  const recipeError = useSelector(selectRecipeError); // Get Recipe Error

  let content;
  if (recipeStatus === "failed") {
    content = (
      <tr className="max-w-screen-lg mx-auto bg-red-50 dark:bg-red-900 shadow-md  overflow-hidden">
        <td
          colSpan={5}
          className="text-center text-lg px-4 py-5 font-medium text-red-500 dark:text-red-300"
        >
          {recipeError}
        </td>
      </tr>
    );
  } else if (recipeStatus === "succeeded") {
    content = recipeId.map((id) => <RecipeTableBody recipeId={id} />);
  }

  return (
    <div className="overflow-x-auto">
      <table className="rounded-xl min-w-full divide-y-2 divide-gray-200 dark:divide-zinc-700  bg-slate-100 dark:bg-zinc-700 dark:bg-zinc-800text-sm">
        <thead className="text-left">
          <tr>
            <th className="text-xl font-bold px-4 py-4 text-zinc-900 dark:text-gray-50">
              Name
            </th>
            <th className="text-xl font-bold px-4 py-4 text-zinc-900 dark:text-gray-50">
              Ingredients
            </th>
            <th className="text-xl font-bold px-4 py-4 text-zinc-900 dark:text-gray-50">
              Description
            </th>
            <th className="text-xl font-bold px-4 py-4 text-zinc-900 dark:text-gray-50">
              Edit
            </th>
            <th className="text-xl font-bold px-4 py-4 text-zinc-900 dark:text-gray-50">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
          {content}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeTable;
