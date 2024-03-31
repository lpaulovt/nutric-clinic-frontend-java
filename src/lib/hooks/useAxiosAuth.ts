"use client";

import { useRefreshToken } from "./useRefreshToken";
import { axiosAuth } from "../axios";
import { useAuth } from "@/app/(authenticated)/hooks/useAuth";

const useAxiosAuth = () => {
  const {
    token,
    refreshToken: refresh,
    id,
    setToken,
    setRefreshToken,
  } = useAuth();

  const refreshToken = useRefreshToken(refresh, id);

  axiosAuth.defaults.headers.common.Authorization = `Bearer ${token}`;

  axiosAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config;
      if (
        (error?.response?.status === 401 || error?.response?.status === 403) &&
        !prevRequest?.sent
      ) {
        const refreshResponse = await refreshToken();
        console.log("refreshResponse", refreshResponse.data.access);
        setToken(refreshResponse.data.access);
        setRefreshToken(refreshResponse.data.refresh);
        prevRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
        prevRequest.sent = true;

        return axiosAuth(prevRequest);
      }
      return Promise.reject(error);
    },
  );

  return axiosAuth;
};

export default useAxiosAuth;
