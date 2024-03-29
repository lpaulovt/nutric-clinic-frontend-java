import Profile from "@/app/types/Profile";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";

export const useFindOneProfile = (courseId: number) => {
  const axiosAuth = useAxiosAuth();

  const fetchCourse = async (id: number) => {
    const response = await axiosAuth.get(`/api/Profiles/${id}`);

    return response.data;
  };

  return useQuery<Profile>({
    queryKey: ["profile", courseId],
    queryFn: () => fetchCourse(courseId),
  });
};
