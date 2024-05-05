import { Request, Response } from "express";
import * as restaurantHandler from "../handlers/restaurants.handler";
export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await restaurantHandler.handleGetAllRestaurants();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const getRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await restaurantHandler.handleGetRestaurant(
      req.params.id
    );
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
    const newRestaurant = await restaurantHandler.handleCreateRestaurant(
      req.body
    );
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const deletedRestaurant = await restaurantHandler.handleDeleteRestaurant(
      req.params.id
    );
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Chef not found" });
    }
    res.json(deletedRestaurant);
  } catch (error) {
    res.status(500).json({ message: "Error deleteing chef" });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const updatedRestaurant = await restaurantHandler.handleUpdateRestaurant(req.params.id, req.body);
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ message: "Error updating restaurant" });
  }
};