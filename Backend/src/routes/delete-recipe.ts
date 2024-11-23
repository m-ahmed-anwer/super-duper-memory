import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";
import mongoose from "mongoose";
import { CustomError } from "../errors/custom-error";

const router = express.Router();

// Route to delete a recipe by ID
router.delete(
  "/api/delete-recipe/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Check if ID is valid
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return next(new CustomError("Invalid or missing ID", 400));
    }

    try {
      // Attempt to delete the recipe
      const deletedRecipe = await Recipe.findByIdAndDelete(id);

      // If no recipe found, return error
      if (!deletedRecipe) return next(new CustomError("Recipe not found", 400));

      // Return success response
      res.status(200).json({
        message: "Recipe deleted successfully",
        recipe: deletedRecipe,
      });
    } catch (error) {
      // Catch any database or server error
      res.status(500).json({ message: "Error deleting recipe", error });
    }
  }
);

export { router as deleteRecipeRouter };
