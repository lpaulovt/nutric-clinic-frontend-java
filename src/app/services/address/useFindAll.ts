import { ListResponse } from "@/app/types/ListResponse";
import { IServiceLocation } from "@/app/types/ServiceLocation";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

import { useQuery } from "@tanstack/react-query";

export const useFindAllAddress = () => {
  const axiosAuth = useAxiosAuth();

  const fetch = async () => {
    const response = await axiosAuth.get(`/api/Address/`);

    return response.data;
  };

  return useQuery<ListResponse<IServiceLocation>>({
    queryKey: ["address"],
    queryFn: () => fetch(),
    enabled: true,
  });
};
