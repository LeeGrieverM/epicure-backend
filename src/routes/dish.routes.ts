
import { Router } from "express";
import { createDish, getAllDishes, getDish } from "../controllers/dish.controller";


const dishRouter = Router();

dishRouter.get("/", getAllDishes);
dishRouter.get("/:id", getDish);
dishRouter.post("/", createDish);


export default dishRouter;
