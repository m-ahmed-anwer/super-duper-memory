import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Recipe API");
});

app.all("*", async (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

export { app };
