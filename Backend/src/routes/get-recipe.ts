import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";

const router = express.Router();

router.get(
  "/api/get-recipes",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get all recipes from the database
      const recipes = await Recipe.find();

      // Return success response
      res.status(200).send(recipes);
    } catch (error) {
      // Catch any database or server error
      res.status(500).send({
        message: "Error getting recipes",
        error,
      });
    }
  }
);

export { router as getRecipeRouter };
