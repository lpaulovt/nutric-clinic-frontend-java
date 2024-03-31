import { IServiceLocation } from "@/app/types/ServiceLocation";
import { axiosAuth } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateAddress = () => {
  return useMutation({
    mutationFn: (profile: Partial<IServiceLocation>) =>
      axiosAuth
        .post("/api/Address/", profile)
        .then((response) => response.data),
  });
};
