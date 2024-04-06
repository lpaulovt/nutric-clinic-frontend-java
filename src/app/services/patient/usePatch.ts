import { IPatient } from "@/app/types/Patient";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const usePatchPatient = (id: string) => {
  return useMutation({
    mutationFn: (patient: Partial<IPatient>) =>
      axiosInstance
        .patch(`/patient`, patient, {
          params: {
            patientId: id,
          },
        })
        .then((response) => response.data),
  });
};
