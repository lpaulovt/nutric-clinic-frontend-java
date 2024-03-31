"use client";

import { axiosInstace } from "../axios";

export const useRefreshToken = (refresh: string, id: number) => {
  const refreshToken = async () => {
    const res = await axiosInstace.post("/api/token-refresh/", {
      refresh: refresh,
      id: id,
    });

    return res;
  };
  return refreshToken;
};
