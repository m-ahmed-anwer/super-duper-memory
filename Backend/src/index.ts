import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  // I know I know this is not the best way to store the mongo url
  // But I am doing this to make it easy for you to run the project without any dontenv file 😉
  const mongo_url =
    process.env.MONGO_URI ||
    "mongodb+srv://ahmedanwer0094:Wh4FA9L8ZjGBemXl@cluster0.epcio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    // Connect to MongoDB
    await mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  // Start the server
  app.listen(process.env.PORT || 3001, () => {
    console.log("Listening on port 3001!");
  });
};

start();
