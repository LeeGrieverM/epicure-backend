import mongoose, { Schema, Document } from "mongoose";
import {IDish} from '../types/types';

const DishShcema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  tags: [{ type: String, required: false }],
  price: { type: Number, required: true },
});

export default mongoose.model<IDish>("Dish", DishShcema);