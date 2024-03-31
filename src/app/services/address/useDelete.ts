import { axiosAuth } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteAddress = () => {
  return useMutation({
    mutationFn: (id: number) =>
      axiosAuth.delete(`/api/Address/${id}/`).then((response) => response.data),
  });
};
