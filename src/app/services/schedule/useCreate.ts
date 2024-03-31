import { Schedule } from "@/app/types/Schedule";
import { axiosAuth } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateSchedule = () => {
  return useMutation({
    mutationFn: (schedule: Partial<Schedule>) =>
      axiosAuth
        .post("/api/Appointments/", schedule)
        .then((response) => response.data),
  });
};
