import { Request, Response } from "express";
import * as searchHandler from "../handlers/search.handler";

export const search = async (req: Request, res: Response) => {
  try {
    const searchWord = req.query.search as string;
    const searchResults = await searchHandler.handleSearch(searchWord);
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ message: "Error searching" });
  }
};
