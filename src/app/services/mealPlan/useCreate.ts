import { IMealPlan } from "@/app/types/MealPlan";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateMealPlan = () => {
  return useMutation({
    mutationFn: (mealPlan: Partial<IMealPlan>) =>
      axiosInstance
        .post("/mealPlan", mealPlan)
        .then((response) => response.data),
  });
};
