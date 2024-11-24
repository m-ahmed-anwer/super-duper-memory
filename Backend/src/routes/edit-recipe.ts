import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";
import mongoose from "mongoose";
import { CustomError } from "../errors/custom-error";
import Redis from "ioredis";

const router = express.Router();

// Create Redis client
const redisClient = new Redis();

// Log Redis connection errors
redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

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

    // Attempt to find and update the recipe
    const editRecipe = await Recipe.findByIdAndUpdate(id, {
      name,
      ingredients,
      description,
    });

    // If no recipe is found, return an error
    if (!editRecipe) {
      return next(new CustomError("Recipe not found", 400));
    }

    if (!process.env.REDIS_KEY) {
      return next(new CustomError("Redis key not found"));
    }

    // Cleaing the cache after editing a recipe
    await redisClient.del(process.env.REDIS_KEY!);

    // Return success response
    res.status(200).send({
      success: true,
      message: "Recipe updated successfully",
      editRecipe: {
        id,
        name,
        ingredients,
        description,
      },
    });
  }
);

export { router as editRecipeRouter };
