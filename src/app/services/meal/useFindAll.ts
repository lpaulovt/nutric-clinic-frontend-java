import { MealListResponse } from "@/app/types/Meal";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFindAllMeals = (mealPlanId: string) => {
  const fetch = async (id: string) => {
    const response = await axiosInstance.get(`/meal/${id}`);

    return response.data;
  };

  return useQuery<MealListResponse>({
    queryKey: ["meal", mealPlanId],
    queryFn: () => fetch(mealPlanId),
    enabled: true,
  });
};
