import { Request, Response } from "express";
import * as chefHandler from "../handlers/chef.handler";

export const getAllChefs = async (req: Request, res: Response) => {
  try {
    const chefs = await chefHandler.handleGetAllChefs();
    res.json(chefs);
  } catch (err) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const createChef = async (req: Request, res: Response) => {
  try {
    const newChef = await chefHandler.handleCreateChef(req.body);
    res.status(201).json(newChef);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const getChef = async (req: Request, res: Response) => {
  try {
    const chef = await chefHandler.handleGetChef(req.params.id);
    if (!chef) {
      return res.status(404).json({ message: "Cannot find chef" });
    }
    res.json(chef);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const getChefOfTheWeek = async (req: Request, res: Response) => {
  try {
    const chef = await chefHandler.handleGetChefOfTheWeek();
    res.json(chef);
  } catch (err) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const deleteChef = async (req: Request, res: Response) => {
  try {
    const deletedChef = await chefHandler.handleDeleteChef(req.params.id);
    if (!deletedChef) {
      return res.status(404).json({ message: "Chef not found" });
    }
    res.json(deletedChef);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const updateChef = async (req: Request, res: Response) => {
  try {
    const updatedChef = await chefHandler.handleUpdateChef(req.params.id, req.body);
    res.json(updatedChef);
  } catch (error) {
    res.status(500).json({ message: "Error updating chef" });
  }
};