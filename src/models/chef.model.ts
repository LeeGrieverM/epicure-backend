import mongoose, { Schema, Document } from "mongoose";
import {IChef} from '../types/types';

const ChefShcema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  restaurants: [
    { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
  ],
  isChefOfTheWeek: { type: Boolean, required: true, default: false },
});

export default mongoose.model<IChef>("Chef", ChefShcema);