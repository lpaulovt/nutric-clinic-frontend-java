import { ListResponse } from "@/app/types/ListResponse";
import { Message } from "@/app/types/Message";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

import { useQuery } from "@tanstack/react-query";

export const useFindAllMessages = () => {
  const axiosAuth = useAxiosAuth();

  const fetchCourse = async () => {
    const response = await axiosAuth.get(`/api/MessageClinis/`);
    return response.data;
  };

  return useQuery<ListResponse<Message>>({
    queryKey: ["messages"],
    queryFn: () => fetchCourse(),
    enabled: true,
  });
};
