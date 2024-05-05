import Dish from "../models/dish.model";
import { IDish } from "../types/types";
import { Aggregate, Document } from 'mongoose';

export async function handleGetAllDishes(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit;

  const aggregation: Aggregate<Document[]> = Dish.aggregate([
    { $skip: skip },
    { $limit: limit }
  ]);

  return aggregation.exec();
}

export async function handleGetDish(dishId: string) {
  const dish = await Dish.findById(dishId);
  return dish;
}

export async function handleCreateDish(dish: IDish) {
  const newDish = new Dish(dish);
  const savedDish = await newDish.save();
  return savedDish;
}

export async function handleDeleteDish(dishId: string) {
  const dish = await Dish.findById(dishId);
  if (!dish) {
    throw new Error("Dish not found");
  }
  dish.isActive = false;
  await dish.save(); 
  return dish;
}

export async function handleUpdateDish(dishId: string, update: Partial<IDish>) {
  const dish = await Dish.findById(dishId);
  if (!dish) {
    throw new Error("Dish not found");
  }

  Object.assign(dish, update);
  await dish.save();
  return dish;
}
