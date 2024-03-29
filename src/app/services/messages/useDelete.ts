import { axiosAuth } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteMessage = () => {
  return useMutation({
    mutationFn: (id: number) =>
      axiosAuth
        .delete(`/api/MessageClinis/${id}/`)
        .then((response) => response.data),
  });
};
