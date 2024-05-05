import Chef from "../models/chef.model";
import { IChef } from "../types/types";

export async function handleGetAllChefs() {
  const chefs = await Chef.find().populate("restaurants");
  return chefs;
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
