import { Request, Response } from "express";
import { handleCreateDish, handleGetAllDishes, handleGetDish } from "../handlers/dish.handler";

export const getAllDishes = async (req: Request, res: Response) => {
    try {
      const dishes = await handleGetAllDishes();
      res.json(dishes);
    } catch (err) {
      res.status(500).json({ message: "ERROR" });
    }
  };

  export const getDish = async (req: Request, res: Response) => {
    try {
      const dish = await handleGetDish(req.params.id);
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
      const newDish = await handleCreateDish(req.body);
      res.status(201).json(newDish);
    } catch (error) {
      res.status(500).json({ message: "ERROR" });
    }
  };