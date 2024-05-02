import { Router } from "express";
import { getAllChefs, createChef } from "../controllers/chef.controller";

const chefRouter = Router();

chefRouter.get("/", getAllChefs);
chefRouter.post("/", createChef);

export default chefRouter;