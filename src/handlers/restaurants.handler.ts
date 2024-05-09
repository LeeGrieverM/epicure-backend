import Restaurant from "../models/restaurant.model";
import Chef from "../models/chef.model";
import { IRestaurant } from "../types/types";
import { Aggregate, Document } from "mongoose";

export async function handleGetAllRestaurants(
  page: number = 1,
  limit: number = 10
) {
  const skip = (page - 1) * limit;

  const aggregation: Aggregate<Document[]> = Restaurant.aggregate([
    { $skip: skip },
    { $limit: limit },
    {
      $lookup: {
        from: "dishes",
        localField: "dishes",
        foreignField: "_id",
        as: "dishes",
      },
    },
    {
      $lookup: {
        from: "chefs",
        localField: "chef",
        foreignField: "_id",
        as: "chef",
      },
    },
    {
      $addFields: {
        chef: { $arrayElemAt: ["$chef", 0] },
      },
    },
  ]);

  return aggregation.exec();
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
  chef.restaurants = chef.restaurants.filter(
    (id) => id.toString() !== restaurantId
  );
  await chef.save();

  restaurant.isActive = false;
  await restaurant.save();
  return restaurant;
}

export async function handleUpdateRestaurant(
  restaurantId: string,
  update: Partial<IRestaurant>
) {
  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  Object.assign(restaurant, update);
  await restaurant.save();
  return restaurant;
}
