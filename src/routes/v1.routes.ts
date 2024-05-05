import { Router } from "express";
import chefRouter from "./chef.routes";
import dishRouter from "./dish.routes";
import restaurantRouter from "./restaurants.routes";

const v1Router = Router();

v1Router.use("/chefs", chefRouter);
v1Router.use("/dishes", dishRouter);
v1Router.use("/restaurants", restaurantRouter);

export default v1Router;
