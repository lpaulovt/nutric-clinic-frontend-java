import { FoodListResponse } from "@/app/types/Food";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFindAllFood = (mealId: string) => {
  const fetch = async (id: string) => {
    const response = await axiosInstance.get(`/food/${id}`);

    return response.data;
  };

  return useQuery<FoodListResponse>({
    queryKey: ["food", mealId],
    queryFn: () => fetch(mealId),
    enabled: true,
  });
};
