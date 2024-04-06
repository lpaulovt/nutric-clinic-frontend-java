import { PatientsListResponse } from "@/app/types/Patient";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFindAllPatients = () => {
  const fetch = async () => {
    const response = await axiosInstance.get("/patients");

    return response.data;
  };

  return useQuery<PatientsListResponse>({
    queryKey: ["patients"],
    queryFn: () => fetch(),
    enabled: true,
  });
};
