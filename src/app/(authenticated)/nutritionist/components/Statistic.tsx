"use client";

import { Users, CalendarCheck, AlertCircle } from "lucide-react";
export interface StatisticProps {
  type: "patient" | "consultation" | "message";
  value: string;
}

export function Statistic({ type, value }: StatisticProps) {
  const titleConfig = {
    patient: "Pacientes",
    consultation: "Consultas",
    message: "Recados",
  };

  const iconConfig = {
    patient: <Users className="text-brand" />,
    consultation: <CalendarCheck className="text-[#ffffff]" />,
    message: <AlertCircle className="text-[#efcb6e]" />,
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="w-[36px] h-[36px] rounded-full bg-black flex justify-center items-center">
        {iconConfig[type]}
      </div>
      <div className="flex flex-col">
        <h1 className="text-[12px] text-black font-semibold">
          {titleConfig[type]}
        </h1>
        <span className="text-[20px] text-black font-semibold">{value}</span>
      </div>
    </div>
  );
}
