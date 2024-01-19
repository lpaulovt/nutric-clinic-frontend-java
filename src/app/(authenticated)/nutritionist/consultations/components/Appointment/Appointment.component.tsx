"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";
import { LabelColumn } from "@/components/designSystem/LabelColumn";
import { ChevronRight } from "lucide-react";
import { AppointmentProps } from "./Appointment.types";
import { Status } from "@/components/designSystem/Status";
import { Button } from "@/components/ui/button";
import { FinishModal } from "../FinishModal";

export function Appointment({}: AppointmentProps) {
  return (
    <div className="w-full flex flex-row justify-between items-center py-4 px-2 border-b border-b-gray100 cursor-pointer hover:bg-[#F5F5F5]">
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

        <Status status="ACTIVE" />
      </div>
      <div className="flex flex-row items-center gap-2">
        <Button variant={"ghost"}>Ver mais</Button>
        <FinishModal
          title="Tem certeza que deseja finalizar a consulta? "
          subtitle="Isso ira mudar o status da consulta para finalizado."
          onConfirm={() => {}}
        />
      </div>
    </div>
  );
}
