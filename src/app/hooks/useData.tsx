import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export const useData = () => {
  const context = useContext(DataContext);

  return context;
};
