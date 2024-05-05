import { Router } from "express";
import { createRestaurant, getAllRestaurants, getRestaurant } from "../controllers/restaurants.controller";

const restaurantRouter = Router();

restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.get("/:id", getRestaurant);
restaurantRouter.post("/", createRestaurant);


export default restaurantRouter;