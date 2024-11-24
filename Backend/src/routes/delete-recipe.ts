import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { Recipe } from "../model/Recipe";
import mongoose from "mongoose";
import { CustomError } from "../errors/custom-error";
import Redis from "ioredis";

const router = express.Router();

// Create Redis client using ioredis
const redisClient = new Redis();

// Log Redis connection errors
redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

// Route to delete a recipe by ID
router.delete(
  "/api/delete-recipe/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Check if ID is valid
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return next(new CustomError("Invalid or missing ID", 400));
    }

    // Attempt to delete the recipe
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    // If no recipe found, return error
    if (!deletedRecipe) return next(new CustomError("Recipe not found", 400));

    if (!process.env.REDIS_KEY) {
      return next(new CustomError("Redis key not found"));
    }

    // Optionally, clear the cache after deleting a recipe
    await redisClient.del(process.env.REDIS_KEY!);

    // Return success response
    res.status(200).json({
      success: true,
      message: "Recipe deleted successfully",
      recipe: deletedRecipe,
    });
  }
);

export { router as deleteRecipeRouter };
