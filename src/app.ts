import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRouter from "./routes/api.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger_output.json";
import cors from "cors"; 

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB__ATLAS_URI = process.env.MONGODB__ATLAS_URI || "";
const MONGODB_LOCAL_URI = process.env.MONGODB_LOCAL_URI || "";
const CONNECT_LOCAL = false;  // change to: false to run with atlas
const MONGO_URI = CONNECT_LOCAL ? MONGODB_LOCAL_URI : `${MONGODB__ATLAS_URI}`;

app.use(cors()); 
app.use(express.json());
app.use("/", apiRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});
``;

mongoose
  .connect(MONGO_URI, { dbName: "EPICURE" })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
