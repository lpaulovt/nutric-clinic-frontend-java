import { axiosAuth } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteSchedule = () => {
  return useMutation({
    mutationFn: (id: number) =>
      axiosAuth
        .delete(`/api/Appointments/${id}/`)
        .then((response) => response.data),
  });
};
