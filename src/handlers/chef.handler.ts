import Chef from "../models/chef.model";
import { IChef } from "../types/types";
import Restaurant from "../models/restaurant.model";
import { Aggregate, Document } from 'mongoose';

export async function handleGetAllChefs(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit;

  const aggregation: Aggregate<Document[]> = Chef.aggregate([
    { $skip: skip },
    { $limit: limit },
    { $lookup: { from: 'restaurants', localField: 'restaurants', foreignField: '_id', as: 'restaurants' } }
  ]);

  return aggregation.exec();
}

export async function handleGetChef(chefId: string) {
  const chef = await Chef.findById(chefId).populate("restaurants");
  return chef;
}
export async function handleCreateChef(chef: IChef) {
  const newChef = new Chef(chef);
  const savedChef = await newChef.save();
  return savedChef;
}

export async function handleGetChefOfTheWeek() {
  const chefOfTheWeek = await Chef.findOne({
    isChefOfTheWeek: true,
  }).populate("restaurants");
  return chefOfTheWeek;
}

export async function handleDeleteChef(chefId: string) {
  const chef = await Chef.findById(chefId);
  if (!chef) {
    throw new Error("Chef not found");
  }

  // inActivate all restaurants associated with chef
  const restaurants = await Restaurant.find({ chef: chefId });
  for (const restaurant of restaurants) {
    restaurant.isActive = false;
    await restaurant.save();
  }
  chef.isActive = false;
  await chef.save();
  return chef;
}

export async function handleUpdateChef(chefId: string, update: Partial<IChef>) {
  const chef = await Chef.findById(chefId);
  if (!chef) {
    throw new Error("Chef not found");
  }
  Object.assign(chef, update);
  await chef.save();
  return chef;
}
