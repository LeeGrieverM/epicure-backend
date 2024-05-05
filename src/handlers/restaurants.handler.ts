import Restaurant from "../models/restaurant.model";
import Chef from "../models/chef.model";
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

  // logic to add the new restaurant to the corresponding chef
  let chef = await Chef.findById(restaurant.chef);

  if (!chef) {
    throw new Error("Chef not found");
  } else if (!chef.restaurants) {
    chef.restaurants = [];
  }

  chef.restaurants.push(newRestaurant);
  await chef.save();

  return newRestaurant;
}

export async function handleDeleteRestaurant(restaurantId: string) {
  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) {
    throw new Error("Chef not found");
  }

  const chef = await Chef.findById(restaurant.chef);
  if (!chef) {
    throw new Error("Chef not found");
  }
  chef.restaurants = chef.restaurants || [];
  // Remove the restaurant from the chef's list of restaurants
  chef.restaurants = chef.restaurants.filter(id => id.toString() !== restaurantId);
  await chef.save();

  restaurant.isActive = false;
  return restaurant;
}

export async function handleUpdateRestaurant(restaurantId: string, update: Partial<IRestaurant>) {
  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  Object.assign(restaurant, update);
  await restaurant.save();
  return restaurant;
}

