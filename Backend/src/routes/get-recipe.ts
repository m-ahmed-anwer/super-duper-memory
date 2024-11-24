import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";
import Redis from "ioredis";
import { CustomError } from "../errors/custom-error";

const router = express.Router();

// Create Redis client using ioredis
const redisClient = new Redis();

// Log Redis connection errors
redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

router.get(
  "/api/get-recipes",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Check Redis cache (use promise-based API)
      const cachedData = await redisClient.get("all_recipes");

      if (cachedData) {
        // If data exists in cache, return it
        console.log("Cache hit");
        res.status(200).send({
          success: true,
          message: "Recipes fetched successfully",
          recipes: JSON.parse(cachedData),
        });
      } else {
        console.log("Cache miss");
        // If no cache, fetch from database
        const recipes = await Recipe.find();

        // Store the result in Redis for 3600 seconds (1 hour)
        redisClient.setex("all_recipes", 3600, JSON.stringify(recipes));

        // Return the database result
        res.status(200).send({
          success: true,
          message: "Recipes fetched successfully",
          recipes,
        });
      }
    } catch (error) {
      // Catch any database or server error
      res.status(500).send({
        success: false,
        message: "Error getting recipes",
        error: (error as Error).message || error,
      });
    }
  }
);

export { router as getRecipeRouter };
