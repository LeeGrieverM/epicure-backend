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
  starts: number;
  isActive: Boolean;
}

export interface IDish extends Document {
  name: string;
  image: string;
  ingredients: string;
  icon: string;
  price: number;
  isActive: Boolean;
}
