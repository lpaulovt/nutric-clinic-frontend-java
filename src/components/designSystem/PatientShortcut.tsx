"use client";

import { IPatient } from "@/app/types/Patient";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";

export interface PatientShortcutProps {
  patient: IPatient;
  showAge?: boolean;
  onClick: (patient: IPatient) => void;
}

export function PatientShortcut({
  patient,
  showAge,
  onClick,
}: PatientShortcutProps) {
  const isActive = patient.status === "ativo";

  return (
    <div
      onClick={() => onClick && onClick(patient)}
      className="flex flex-col justify-center items-center gap-2 cursor-pointer hover:opacity-85 transition-all"
    >
      <Avatar className="w-[100px] h-[100px] bg-brand">
        <AvatarFallback
          className={`text-white text-[32px] font-bold ${
            isActive ? "bg-brand" : "bg-gray400"
          }`}
        >
          {getInitialLetters(patient.name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[18px] text-black font-semibold">{patient.name}</h1>
        {showAge && (
          <span className="text-[14px] text-gray500 font-medium">
            {patient.age} anos
          </span>
        )}
      </div>
    </div>
  );
}
