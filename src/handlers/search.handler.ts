import Chef from "../models/chef.model";
import Restaurant from "../models/restaurant.model";
import Dish from "../models/dish.model";
import { IRestaurant, IDish } from "../types/types";

export async function handleSearch(searchWord: string) {
  const [chefResults, restaurantResults, dishResults] = await Promise.all([
    Chef.find({ name: { $regex: searchWord, $options: "i" } }),
    Restaurant.find({ name: { $regex: searchWord, $options: "i" } }),
    Dish.find({ name: { $regex: searchWord, $options: "i" } }),
  ]);

  return {
    chefs: chefResults,
    restaurants: restaurantResults,
    dishes: dishResults,
  };
}
