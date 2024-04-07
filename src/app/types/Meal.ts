export interface IMeal {
  id: string;
  name: string;
  time: string;
  createdAt: string;
  mealPlanId: string;
}

export interface MealListResponse {
  meals: IMeal[];
}

export interface MealResponse {
  meal: IMeal;
}
