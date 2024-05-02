export interface IChef extends Document {
  name: string;
  image: string;
  description: string;
  restaurants: IRestaurant[];
  isChefOfTheWeek: boolean;
}

export interface IRestaurant extends Document {
  name: string;
  image: string;
  chef: IChef;
  dishes: IDish[];
}

export interface IDish extends Document {
  name: string;
  image: string;
  ingredients: string[];
  tags: string[];
  price: number;
  // restaurant: IRestaurant;
}
