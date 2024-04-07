export interface IFood {
  id: string;
  name: string;
  measure: string;
  quantity: string;
  observation: string;
  createdAt: string;
  mealId: string;
}

export interface FoodListResponse {
  foods: IFood[];
}

export interface FoodResponse {
  food: IFood;
}
