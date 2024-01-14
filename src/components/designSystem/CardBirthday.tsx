"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface CardBirthdayProps {}

export function CardBirthday({}: CardBirthdayProps) {
  return (
    <div className="flex flex-row max-w-[356px] justify-between items-center w-full border border-gray100 rounded-md p-4 ">
      <div className="flex flex-row items-center gap-4">
        <Avatar className="w-[40px] h-[40px] bg-info">
          <AvatarFallback className="bg-[#efcb6e]">🎉</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-[16px] text-black font-semibold">Paulo Vitor</h1>
          <span className="text-[12px] text-gray400 font-regular">21 anos</span>
        </div>
      </div>

      <Button variant={"secondary"}>Enviar mensagem</Button>
    </div>
  );
}
