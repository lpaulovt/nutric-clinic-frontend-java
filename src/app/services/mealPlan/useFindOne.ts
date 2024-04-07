import { IMealPlan } from "@/app/types/MealPlan";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFindOneMealPlan = (id?: string) => {
  const fetch = async () => {
    const response = await axiosInstance.get(`/mealPlan/${id}`);

    return response.data;
  };

  return useQuery<IMealPlan>({
    queryKey: ["mealPlan"],
    queryFn: () => fetch(),
  });
};
