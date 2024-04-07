import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeletePatient = () => {
  return useMutation({
    mutationFn: (id: string) =>
      axiosInstance.delete(`/patient/${id}`).then((response) => response.data),
  });
};
