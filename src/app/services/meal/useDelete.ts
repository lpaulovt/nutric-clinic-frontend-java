import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteMeal = () => {
  return useMutation({
    mutationFn: (id: string) =>
      axiosInstance.delete(`/meal/${id}`).then((response) => response.data),
  });
};
