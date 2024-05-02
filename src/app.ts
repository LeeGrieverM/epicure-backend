import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRouter from "./routes/api.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});


app.use("/api", apiRouter);

mongoose
  .connect(
    "mongodb+srv://LeeGriever:Lee246135@epicure-backend.7tyyp19.mongodb.net/",
    {dbName: 'EPICURE'}
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
