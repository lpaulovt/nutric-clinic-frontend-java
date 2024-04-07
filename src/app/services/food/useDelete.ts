import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteFood = () => {
  return useMutation({
    mutationFn: (id: string) =>
      axiosInstance.delete(`/food/${id}`).then((response) => response.data),
  });
};
