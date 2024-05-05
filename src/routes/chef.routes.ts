import { Router } from "express";
import { getAllChefs, createChef, getChef, getChefOfTheWeek } from "../controllers/chef.controller";

const chefRouter = Router();

chefRouter.get("/", getAllChefs);
chefRouter.get("/chefOfTheWeek", getChefOfTheWeek);
chefRouter.get("/:id", getChef);
chefRouter.post("/", createChef);



export default chefRouter;