import Dish from '../models/dish.model';
import { IDish } from '../types/types';

export async function handleGetAllDishes() {
    const dishes = await Dish.find();
    return dishes;
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
