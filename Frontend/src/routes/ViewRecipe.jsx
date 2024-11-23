import React from "react";
import RecipeSticker from "../components/RecipeSticker";
import Navbar from "../components/Navbar";

function ViewRecipe() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Pancetta",
        "Parmesan Cheese",
        "Black Pepper",
      ],
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      description: "Soft and chewy cookies with gooey chocolate chips.",
      ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Chocolate Chips",
        "Vanilla Extract",
      ],
    },
    {
      id: 3,
      title: "Caesar Salad",
      description:
        "A refreshing salad with crisp romaine lettuce, croutons, and Caesar dressing.",
      ingredients: [
        "Romaine Lettuce",
        "Croutons",
        "Parmesan Cheese",
        "Caesar Dressing",

        "Lemon Juice",
      ],
    },
    {
      id: 4,
      title: "Chicken Curry",
      description:
        "A flavorful and spicy chicken curry with a blend of aromatic spices.",
      ingredients: ["Chicken", "Onions", "Tomatoes", "Garlic", "Curry Powder"],
    },
    {
      id: 5,
      title: "Caesar Salad",
      description:
        "A refreshing salad with crisp romaine lettuce, croutons, and Caesar dressing.",
      ingredients: [
        "Romaine Lettuce",
        "Croutons",
        "Parmesan Cheese",
        "Caesar Dressing",
        "Croutons",
      ],
    },
    {
      id: 6,
      title: "Caesar Salad",
      description:
        "A refreshing salad with crisp romaine lettuce, croutons, and Caesar dressing.",
      ingredients: [
        "Romaine Lettuce",
        "Croutons",
        "Parmesan Cheese",
        "Caesar Dressing",
        "Lemon Juice",
      ],
    },
  ];

  return (
    <>
      <div className=" px-4 py-12 text-zinc-50 dark:bg-zinc-900">
        <h1 className="text-5xl leading-tight text-center mb-12 font-mono font-bold text-black dark:text-white">
          Recipes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {recipes.map((recipe) => (
            <RecipeSticker
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewRecipe;
