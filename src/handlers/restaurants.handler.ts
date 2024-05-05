import Restaurant from "../models/restaurant.model";
import { IRestaurant } from "../types/types";

export async function handleGetAllRestaurants() {
  const restaurants = await Restaurant.find()
    .populate("chef")
    .populate("dishes");
  return restaurants;
}

export async function handleGetRestaurant(restaurantId: string) {
  const restaurant = await Restaurant.findById(restaurantId)
    .populate("chef")
    .populate("dishes");
  return restaurant;
}

export async function handleCreateRestaurant(restaurant: IRestaurant) {
  const newRestaurant = new Restaurant(restaurant);
  await newRestaurant.save();
  return newRestaurant;
}
