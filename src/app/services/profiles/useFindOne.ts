import Profile from "@/app/types/Profile";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";

export const useFindOneProfile = (profileId?: number) => {
  const axiosAuth = useAxiosAuth();

  const fetch = async () => {
    const response = await axiosAuth.get(`/api/Profiles/${profileId}/`);

    return response.data;
  };

  return useQuery<Profile>({
    queryKey: ["profile"],
    queryFn: () => fetch(),
  });
};
