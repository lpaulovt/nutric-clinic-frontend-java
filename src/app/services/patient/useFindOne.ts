import { PatientResponse } from "@/app/types/Patient";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFindOnePatient = (id?: string) => {
  const fetch = async () => {
    const response = await axiosInstance.get(`/patient/${id}`);

    return response.data;
  };

  return useQuery<PatientResponse>({
    queryKey: ["patient"],
    queryFn: () => fetch(),
  });
};
