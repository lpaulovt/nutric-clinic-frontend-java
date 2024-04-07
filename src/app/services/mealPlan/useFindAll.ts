import { MealPlansListResponse } from "@/app/types/MealPlan";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFindAllMealPlans = (patientId: string) => {
  const fetch = async (id: string) => {
    const response = await axiosInstance.get(`/mealPlans/${id}`);

    return response.data;
  };

  return useQuery<MealPlansListResponse>({
    queryKey: ["mealPlan", patientId],
    queryFn: () => fetch(patientId),
    enabled: true,
  });
};
