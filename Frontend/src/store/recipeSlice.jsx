import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const RECIPE_BASE_URL = "http://localhost:3001/api"; // Backend URL

// Entity Adapter
const recipeAdapter = createEntityAdapter({
  selectId: (recipe) => recipe.id,
});

// Thunk to fetch recipes from the API
export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipes",
  async () => {
    const response = await axios.get(RECIPE_BASE_URL + "/get-recipes");
    return response.data;
  }
);

// Thunk to add a new recipe
export const addRecipe = createAsyncThunk(
  "recipe/addRecipe",
  async (recipe) => {
    const response = await axios.put(`${RECIPE_BASE_URL}/add-recipe`, recipe);
    return response.data;
  }
);

// Thunk to update a recipe
export const updateRecipe = createAsyncThunk(
  "recipe/updateRecipe",
  async ({ recipe, recipeId }) => {
    const response = await axios.post(
      `${RECIPE_BASE_URL}/edit-recipe/${recipeId}`,
      recipe
    );
    return response.data;
  }
);

// Thunk to delete a recipe
export const deleteRecipe = createAsyncThunk(
  "recipe/deleteRecipe",
  async (recipeId) => {
    const response = await axios.delete(
      `${RECIPE_BASE_URL}/delete-recipe/${recipeId}`
    );
    return response.data;
  }
);

// Initial state with entity adapter and additional status/error properties
const initialState = recipeAdapter.getInitialState({
  status: "idle",
  error: null,
});

// Recipe Slice with reducers and extra reducers for async actions
const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.status = "succeeded";

          // Process ingredients (convert string to array)
          const recipesWithArrayIngredients = action.payload.recipes.map(
            (recipe) => ({
              ...recipe,
              ingredients: recipe.ingredients
                .split(",")
                .map((ingredient) => ingredient.trim())
                .filter(Boolean),
            })
          );

          recipeAdapter.upsertMany(state, recipesWithArrayIngredients); // Add multiple recipes to redux store
        } else {
          state.status = "failed";
          state.error = action.payload.message;
        }
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        if (action.payload.success) {
          // Process ingredients (convert string to array)
          const newRecipeWithArrayIngredients = {
            ...action.payload.newRecipe,
            ingredients: action.payload.newRecipe.ingredients
              .split(",")
              .map((ingredient) => ingredient.trim())
              .filter(Boolean),
          };

          recipeAdapter.addOne(state, newRecipeWithArrayIngredients); // Add a single recipe to redux store
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(addRecipe.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        if (action.payload.success) {
          // Process ingredients (convert string to array)
          const editedRecipeWithArrayIngredients = {
            ...action.payload.editRecipe,
            ingredients: action.payload.editRecipe.ingredients
              .split(",")
              .map((ingredient) => ingredient.trim())
              .filter(Boolean),
          };

          recipeAdapter.upsertOne(state, editedRecipeWithArrayIngredients); // Update a single recipe in redux store
        } else {
          state.error = action.payload.message;
        }
      })

      .addCase(updateRecipe.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        if (action.payload.success) {
          recipeAdapter.removeOne(state, action.payload.recipe.id); // Remove a single recipe from redux store
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export const {
  selectAll: selectAllRecipes,
  selectById: selectRecipeById,
  selectIds: selectRecipeIds,
} = recipeAdapter.getSelectors((state) => state.recipe); // Export selectors from the entity adapter

export const selectRecipeStatus = (state) => state.recipe.status; // Export status of the recipe slice
export const selectRecipeError = (state) => state.recipe.error; // Export error of the recipe slice

export default recipeSlice.reducer;
