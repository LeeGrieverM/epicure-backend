import { Router } from "express";
import { getAllChefs, createChef, getChef } from "../controllers/chef.controller";

const chefRouter = Router();

chefRouter.get("/", getAllChefs);
chefRouter.post("/", createChef);
chefRouter.get("/:id", getChef);
chefRouter.get("/chefOfTheWeek", );



export default chefRouter;