"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

import Profile from "@/app/types/Profile";
import { ProfileTypeEnum } from "@/app/types/User";

type AuthContextData = {
  refreshToken: string;
  token: string;
  profile: Profile | null;
  id: any;
  isNutricionist: boolean;
  isPatient: boolean;
  setRefreshToken: Dispatch<SetStateAction<string>>;
  setToken: Dispatch<SetStateAction<string>>;
};

type Props = {
  children: ReactNode;
  data: {
    token: string;
    refreshToken: string;
    profile: Profile | null;
    id: any;
  };
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children, data }: Props) => {
  const [token, setToken] = useState(data.token);
  const [refreshToken, setRefreshToken] = useState(data.refreshToken);

  const isNutricionist = useMemo(() => {
    return data.profile?.type === ProfileTypeEnum.nutritionist;
  }, []);

  const isPatient = useMemo(() => {
    return data.profile?.type === ProfileTypeEnum.patient;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        profile: data.profile,
        token: token,
        refreshToken: refreshToken,
        id: data.id,
        isNutricionist,
        isPatient,
        setRefreshToken,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
