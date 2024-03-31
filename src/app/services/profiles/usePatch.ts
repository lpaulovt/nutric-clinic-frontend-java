import { CreateUserProfile } from "@/app/types/Profile";
import { axiosInstace } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const usePatchProfile = (id: number) => {
  return useMutation({
    mutationFn: (profile: Partial<CreateUserProfile>) =>
      axiosInstace
        .patch(`/api/Profiles/${id}/`, profile)
        .then((response) => response.data),
  });
};
