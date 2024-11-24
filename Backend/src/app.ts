import express from "express";
import cors, { CorsOptions } from "cors";
import { getRecipeRouter } from "./routes/get-recipe";
import { addRecipeRouter } from "./routes/add-recipe";
import { editRecipeRouter } from "./routes/edit-recipe";
import { deleteRecipeRouter } from "./routes/delete-recipe";
import { errorHandler } from "./middleware/error-handler";

const app = express();

const allowedOrigins = [
  "https://frontend-706975379343.us-central1.run.app",
  "http://localhost:5173", // Local development frontend
];

// Configure CORS to allow the frontend origin
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(express.json());
app.use(cors(corsOptions));

// Root route for testing the API
app.get("/", (req, res) => {
  res.status(200).send("Recipe API");
});

// Use the routers for each route
app.use(getRecipeRouter);
app.use(addRecipeRouter);
app.use(editRecipeRouter);
app.use(deleteRecipeRouter);

// Handle undefined routes with a 404 error
app.all("*", async (req, res) => {
  res.status(404).send({ success: false, message: "Page not found" });
});

// Use the error handler middleware
app.use(errorHandler);

export { app };
