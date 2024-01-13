"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";

export interface GreetingsProps {
  name: string;
  crn: string;
}

export function Greetings({ name, crn }: GreetingsProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar className="w-[60px] h-[60px] bg-brand">
        <AvatarFallback className="text-white bg-brand">
          {getInitialLetters(name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <h1 className="text-[14px] text-black font-semibold">Olá, {name}</h1>
        <span className="text-[10px] text-black font-regular">CRN {crn}</span>
      </div>
    </div>
  );
}
