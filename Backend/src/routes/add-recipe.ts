import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";
import { CustomError } from "../errors/custom-error";
import Redis from "ioredis";

const router = express.Router();

// Create Redis client using ioredis
const redisClient = new Redis();

// Log Redis connection errors
redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

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

      // Cleanring the cache to reflect the new addition
      await redisClient.del("all_recipes");

      // Return success response
      res.status(201).send({
        success: true,
        message: "Recipe added successfully",
        newRecipe,
      });
    } catch (error) {
      // Catch any database or server error
      res.status(500).send({
        success: false,
        message: "Error adding recipe",
        error,
      });
    }
  }
);

export { router as addRecipeRouter };
