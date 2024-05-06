import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRouter from "./routes/api.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger_output.json";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

app.use(express.json());

app.use("/", apiRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});
``;

mongoose
  .connect(MONGODB_URI, { dbName: "EPICURE" })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
