export interface IChef extends Document {
  name: string;
  image: string;
  description: string;
  restaurants?: IRestaurant[];
  isChefOfTheWeek: boolean;
  isActive: Boolean;
}

export interface IRestaurant extends Document {
  name: string;
  image: string;
  chef: IChef;
  dishes: IDish[];
  isActive: Boolean;
}

export interface IDish extends Document {
  name: string;
  image: string;
  ingredients: string[];
  tags: string[];
  price: number;
  isActive: Boolean;
}
