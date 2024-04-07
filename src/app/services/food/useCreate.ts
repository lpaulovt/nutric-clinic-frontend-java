import { IFood } from "@/app/types/Food";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateFood = () => {
  return useMutation({
    mutationFn: (food: Partial<IFood>) =>
      axiosInstance.post("/food", food).then((response) => response.data),
  });
};
