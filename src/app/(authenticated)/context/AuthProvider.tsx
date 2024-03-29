"use client";

import { createContext, ReactNode, useMemo } from "react";

import Profile from "@/app/types/Profile";
import { ProfileTypeEnum } from "@/app/types/User";

type AuthContextData = {
  token: string;
  profile: Profile | null;
  id: any;
  isNutricionist: boolean;
  isPatient: boolean;
};

type Props = {
  children: ReactNode;
  data: {
    token: string;
    profile: Profile | null;
    id: any;
  };
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children, data }: Props) => {
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
        token: data.token,
        id: data.id,
        isNutricionist,
        isPatient,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
