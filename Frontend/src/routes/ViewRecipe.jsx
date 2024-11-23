import React from "react";
import RecipeSticker from "../components/RecipeSticker";
import Navbar from "../components/Navbar";
import "animate.css";
import { Link } from "react-router-dom";
import AddRecipe from "./AddRecipe";
import AddRecipeSticker from "../components/AddRecipeSticker";

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
      <div className=" px-4 py-12 dark:bg-zinc-900 ">
        <div className="text-center  dark:text-white text-zinc-900  my-32">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
            Discover Delicious Recipes
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeInUp">
            Explore a variety of recipes that will tantalize your taste buds!
          </p>
          <Link
            to={"/add-recipe"}
            className="bg-[#00ADB5] text-[#222831] font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Add Your Recipe
          </Link>
        </div>

        <h2 className="text-5xl leading-tight text-center mb-12 font-mono font-bold text-black dark:text-white  animate__animated animate__fadeIn">
          Recipes
        </h2>
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
          <AddRecipeSticker />
        </div>
      </div>
    </>
  );
}

export default ViewRecipe;
