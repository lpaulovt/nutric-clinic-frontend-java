import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteMealPlan = () => {
  return useMutation({
    mutationFn: (id: string) =>
      axiosInstance.delete(`/mealPlan/${id}`).then((response) => response.data),
  });
};
