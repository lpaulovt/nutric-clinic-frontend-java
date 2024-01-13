"use client";

import { AlertCircle, Settings2 } from "lucide-react";

export interface CardMessageProps {
  id: number;
  message: string;
}

export function CardMessage({ id, message }: CardMessageProps) {
  return (
    <div className="flex flex-col max-w-[356px] justify-between items-center w-full border border-gray100 rounded-md p-4 ">
      <div className="w-full flex flex-row justify-between">
        <AlertCircle className="text-[#efcb6e]" />
        <Settings2 className="cursor-pointer " />
      </div>
      <p className="text-[14px] font-semibold text-black mt-5">{message}</p>
    </div>
  );
}
