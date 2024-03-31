import { ListResponse } from "@/app/types/ListResponse";
import { Schedule } from "@/app/types/Schedule";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

import { useQuery } from "@tanstack/react-query";

export const useFindAllSchedules = () => {
  const axiosAuth = useAxiosAuth();

  const fetch = async () => {
    const response = await axiosAuth.get(`/api/Appointments/`);

    return response.data;
  };

  return useQuery<ListResponse<Schedule>>({
    queryKey: ["schedule"],
    queryFn: () => fetch(),
    enabled: true,
  });
};
