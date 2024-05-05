import { Request, Response } from "express";

export async function getAll<T>(handler: () => Promise<T[]>) {
  return async (_req: Request, res: Response) => {
    try {
      const data = await handler();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "ERROR" });
    }
  };
}

export async function getDocument<T>(
  handler: (id: string) => Promise<T | null>
) {
  return async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await handler(id);
      if (!data) {
        return res.status(404).json({ message: "Cannot find data" });
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "ERROR" });
    }
  };
}
