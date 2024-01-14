"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";
import { Button } from "@/components/ui/button";
import { LabelColumn } from "@/components/designSystem/LabelColumn";

export interface AppointmentProps {}

export function Appointment({}: AppointmentProps) {
  return (
    <div className="w-full flex flex-row justify-between items-center py-4 px-2 border-b border-b-gray100 hover:bg-gray100">
      <div className="flex flex-row justify-start items-center gap-8">
        <div className="flex flex-row items-center gap-4">
          <Avatar className="w-[40px] h-[40px] bg-brand">
            <AvatarFallback className="text-white bg-brand">
              {getInitialLetters("Paulo Vitor")}
            </AvatarFallback>
          </Avatar>
          <LabelColumn label="Paulo Vitor" value=" 21 anos" />
        </div>

        <LabelColumn label="Horário" value="13:00" />
        <LabelColumn label="Local" value="Consultório 1, São Miguel" />
      </div>

      <Button variant={"ghost"}>Ver mais</Button>
    </div>
  );
}
