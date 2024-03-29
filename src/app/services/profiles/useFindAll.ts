import { ListResponse } from "@/app/types/ListResponse";
import Profile from "@/app/types/Profile";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

import { useQuery } from "@tanstack/react-query";

export const useFindAllProfiles = (offset: number, search: string) => {
  const axiosAuth = useAxiosAuth();

  const fetchCourse = async () => {
    const response = await axiosAuth.get(
      `/api/Profiles/?offset=${offset}&search=${search}`,
    );

    return response.data;
  };

  return useQuery<ListResponse<Profile>>({
    queryKey: ["profiles", offset, search],
    queryFn: () => fetchCourse(),
    enabled: true,
  });
};
