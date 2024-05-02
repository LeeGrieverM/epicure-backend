import { Request, Response } from "express";
import {
  handleGetAllChefs,
  handleCreateChef,
  handleGetChef,
  handleGetChefOfTheWeek,
} from "../handlers/chef.handler";

export const getAllChefs = async (req: Request, res: Response) => {
  try {
    console.log("in getAllChefs");
    const chefs = await handleGetAllChefs();
    res.json(chefs);
  } catch (err) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const createChef = async (req: Request, res: Response) => {
  try {
    const newChef = await handleCreateChef(req.body);
    res.status(201).json(newChef);
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};

export const getChef = async (req: Request, res: Response) => {
  try {
    const chef = await handleGetChef(req.params.id);
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
    const chef = await handleGetChefOfTheWeek();
    res.json(chef);
  } catch (err) {
    res.status(500).json({ message: "ERROR" });
  }
};
