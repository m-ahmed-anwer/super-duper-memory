import React from "react";
import RecipeTableBody from "./RecipeTableBody";

function RecipeTable({ recipeId }) {
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
          {recipeId.map((id) => (
            <RecipeTableBody recipeId={id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeTable;
