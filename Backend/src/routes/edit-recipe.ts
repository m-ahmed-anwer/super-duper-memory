import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";
import mongoose from "mongoose";
import { CustomError } from "../errors/custom-error";

const router = express.Router();

router.post(
  "/api/edit-recipe/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const { name, ingredients, description } = req.body;

    // Check if ID is valid
    if (!id || mongoose.Types.ObjectId.isValid(id) === false) {
      return next(new CustomError("Invalid or missing ID", 400));
    }

    // Check if required fields are provided
    if (!name || !ingredients || !description) {
      return next(new CustomError("Missing required fields", 400)); // Missing fields error
    }

    try {
      // Attempt to find and update the recipe
      const editRecipe = await Recipe.findByIdAndUpdate(id, {
        name,
        ingredients,
        description,
      });

      // If no recipe is found, return an error
      if (!editRecipe) {
        return next(new CustomError("Recipe not found", 400)); // Recipe not found error
      }

      // Return success response
      res.status(200).send({
        message: "Recipe updated successfully",
      });
    } catch (error) {
      // Catch any database or server error
      res.status(500).send({
        message: "Error updating recipe",
        error,
      });
    }
  }
);

export { router as editRecipeRouter };
