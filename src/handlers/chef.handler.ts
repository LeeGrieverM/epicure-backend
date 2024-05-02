import Chef from "../models/chef.model";
import { IChef } from "../types/types";

export async function handleGetAllChefs() {
  const chefs = await Chef.find().populate("restaurants");
  console.log(chefs);
  return chefs;
}

export async function handleCreateChef(chef: IChef) {
  const newChef = new Chef(chef);
  const savedChef = await newChef.save();
  // DELETE
  console.log(savedChef);
  return savedChef;
}
