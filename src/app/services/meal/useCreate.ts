import { IMeal } from "@/app/types/Meal";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateMeal = () => {
  return useMutation({
    mutationFn: (meal: Partial<IMeal>) =>
      axiosInstance.post("/meal", meal).then((response) => response.data),
  });
};
