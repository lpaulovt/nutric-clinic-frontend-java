import { IMeal } from "@/app/types/Meal";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const usePatchMeal = (id: string) => {
  return useMutation({
    mutationFn: (meal: Partial<IMeal>) =>
      axiosInstance
        .patch(`/meal`, meal, {
          params: {
            mealId: id,
          },
        })
        .then((response) => response.data),
  });
};
