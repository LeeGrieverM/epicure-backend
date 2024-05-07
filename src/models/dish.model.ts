import mongoose, { Schema, Document } from "mongoose";
import { IDish } from "../types/types";

const DishShcema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  price: { type: Number, required: true },
  icon:  { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

export default mongoose.model<IDish>("Dish", DishShcema);
