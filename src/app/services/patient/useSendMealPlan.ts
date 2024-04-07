import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useSendMealPlan = () => {
  return useMutation({
    mutationFn: (patientId: string) =>
      axiosInstance
        .post("/patient/sendMessage", patientId, {
          params: {
            patientId,
          },
        })
        .then((response) => response.data),
  });
};
