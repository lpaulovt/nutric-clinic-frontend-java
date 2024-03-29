import { CreateUserProfile } from "@/app/types/Profile";
import { axiosInstace } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateProfile = () => {
  return useMutation({
    mutationFn: (profile: Partial<CreateUserProfile>) =>
      axiosInstace
        .post("/api/Profiles/", profile)
        .then((response) => response.data),
  });
};
