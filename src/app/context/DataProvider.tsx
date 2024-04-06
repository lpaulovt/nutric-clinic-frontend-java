"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { IPatient } from "../types/Patient";

type DataContextData = {
  patient: IPatient;
  setPatient: Dispatch<SetStateAction<IPatient>>;
};

type Props = {
  children: ReactNode;
};

export const DataContext = createContext({} as DataContextData);

export const DataProvider = ({ children }: Props) => {
  const [patient, setPatient] = useState<IPatient>({} as IPatient);

  return (
    <DataContext.Provider
      value={{
        patient,
        setPatient,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
