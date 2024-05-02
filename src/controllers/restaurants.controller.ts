import { Request, Response } from "express";
import { handleCreateRestaurant, handleGetAllRestaurants, handleGetRestaurant } from "../handlers/restaurants.handler";
export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = await handleGetAllRestaurants();
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ message: "ERROR" });
    }
  };

  export const getRestaurant = async (req: Request, res: Response) => {
    try {
      const restaurant = await handleGetRestaurant(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ message: "Cannot find restaurant" });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "ERROR" });
    }
  };

  export const createRestaurant = async (req: Request, res: Response) => {
    try {
      console.log("in create restaurant");
      const newRestaurant = await handleCreateRestaurant(req.body);
      console.log("in create restaurant, new restaurant: ", newRestaurant);
      res.status(201).json(newRestaurant);
    } catch (error) {
      res.status(500).json({ message: "ERROR" });
    }
  };
