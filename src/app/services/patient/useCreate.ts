import { IPatient } from "@/app/types/Patient";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreatePatient = () => {
  return useMutation({
    mutationFn: (patient: Partial<IPatient>) =>
      axiosInstance.post("/patient", patient).then((response) => response.data),
  });
};
