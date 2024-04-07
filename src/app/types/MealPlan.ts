export interface IMealPlan {
  id: string;
  name: string;
  daysOfWeek: string;
  status: string;
  createdAt: string;
  patientId: string;
}

export interface MealPlansListResponse {
  mealPlans: IMealPlan[];
}

export interface MealPlanResponse {
  mealPlan: IMealPlan;
}
