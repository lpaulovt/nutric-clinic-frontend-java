"use client";

import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";
import { axiosAuth } from "../axios";
import { useAuth } from "@/app/(authenticated)/hooks/useAuth";

const useAxiosAuth = () => {
  const { token } = useAuth();
  const refreshToken = useRefreshToken();

  axiosAuth.defaults.headers.common.Authorization = `Bearer ${token}`;

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;

        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await refreshToken();
          prevRequest.headers.Authorization = `Bearer ${token}`;
          return axiosAuth(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [refreshToken]);

  return axiosAuth;
};

export default useAxiosAuth;
