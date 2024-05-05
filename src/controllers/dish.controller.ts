import { Request, Response } from "express";
import * as dishHandler from "../handlers/dish.handler";

export const getAllDishes = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const dishes = await dishHandler.handleGetAllDishes(page, limit);
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dishes" });
  }
};

export const getDish = async (req: Request, res: Response) => {
  try {
    const dish = await dishHandler.handleGetDish(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: "Cannot find dish" });
    }
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const createDish = async (req: Request, res: Response) => {
  try {
    const newDish = await dishHandler.handleCreateDish(req.body);
    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  try {
    const deletedDish = await dishHandler.handleDeleteDish(req.params.id);
    if (!deletedDish) {
      return res.status(404).json({ message: "Chef not found" });
    }
    res.json(deletedDish);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const updateDish = async (req: Request, res: Response) => {
  try {
    const updateDish = await dishHandler.handleUpdateDish(
      req.params.id,
      req.body
    );
    res.json(updateDish);
  } catch (error) {
    res.status(500).json({ message: "Error updating Dish" });
  }
};
