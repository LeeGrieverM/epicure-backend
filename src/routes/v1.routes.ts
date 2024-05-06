import { Router } from "express";
import chefRouter from "./chef.routes";
import dishRouter from "./dish.routes";
import restaurantRouter from "./restaurants.routes";
import searchRouter from "./search.routes";


const v1Router = Router();

v1Router.use("/chefs", chefRouter);
v1Router.use("/dishes", dishRouter);
v1Router.use("/restaurants", restaurantRouter);
v1Router.use("/search", searchRouter);

export default v1Router;
