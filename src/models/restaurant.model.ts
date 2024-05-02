import mongoose, { Schema } from "mongoose";
import {IRestaurant} from '../types/types';

const RestaurantShcema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: "Dish", required: true }],
  // add status attribute
});

export default mongoose.model<IRestaurant>("Restaurant", RestaurantShcema);