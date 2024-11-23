import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";
import { CustomError } from "../errors/custom-error";

const router = express.Router();

router.put(
  "/api/add-recipe",
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, ingredients, description } = req.body;

    // Check if required fields are provided
    if (!name || !ingredients || !description) {
      return next(new CustomError("Missing required fields", 400));
    }

    try {
      // Create a new recipe in the database
      const newRecipe = await Recipe.create({
        name,
        ingredients,
        description,
      });

      // Return success response
      res.status(201).send(newRecipe);
    } catch (error) {
      // Catch any database or server error
      res.status(500).send({
        message: "Error adding recipe",
        error,
      });
    }
  }
);

export { router as addRecipeRouter };
