import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1); // Exiting the process if connection fails
  }

  // Start the server
  app.listen(process.env.PORT || 3001, () => {
    console.log("Listening on port 3001!");
  });
};

start();
