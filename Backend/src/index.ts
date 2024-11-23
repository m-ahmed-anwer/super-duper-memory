import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }

  // Start the server
  app.listen(process.env.PORT || 3001, () => {
    console.log("Listening on port 3001!");
  });
};

start();
