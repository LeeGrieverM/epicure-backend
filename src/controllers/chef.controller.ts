import { Request, Response } from "express";
import { handleGetAllChefs, handleCreateChef } from "../handlers/chef.handler";

export const getAllChefs = async (req: Request, res: Response) => {
  try {
    const chefs = await handleGetAllChefs();
    res.json(chefs);
  } catch (err) {
    res.status(500).json({ message: "Cannot load chefs" });
  }
};

export const createChef = async (req: Request, res: Response) => {
  try {
    const newChef = await handleCreateChef(req.body);
    res.status(201).json(newChef);
  } catch (error) {
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};
