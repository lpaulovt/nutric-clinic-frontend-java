import { IMealPlan } from "@/app/types/MealPlan";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const usePatchMealPlan = (id: string) => {
  return useMutation({
    mutationFn: (mealPlan: Partial<IMealPlan>) =>
      axiosInstance
        .patch(`/mealPlan`, mealPlan, {
          params: {
            mealPlanId: id,
          },
        })
        .then((response) => response.data),
  });
};
