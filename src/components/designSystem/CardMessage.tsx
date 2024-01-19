"use client";

import { DeleteModal } from "@/app/(authenticated)/nutritionist/patients/components/DeleteModal";
import { AlertCircle } from "lucide-react";

export interface CardMessageProps {
  id: number;
  message: string;
  type?: "VIEW" | "DELETE";
}

export function CardMessage({ id, message, type = "VIEW" }: CardMessageProps) {
  return (
    <div className="flex flex-col max-w-[356px] justify-between items-center w-full border border-gray100 rounded-md p-4 ">
      <div className="w-full flex flex-row justify-between">
        <AlertCircle className="text-[#efcb6e]" />

        {type === "DELETE" && (
          <DeleteModal
            title="Tem certeza que deseja excluir o recado "
            subtitle="Isso ira excluir permanentemente o recado."
            onConfirm={() => {}}
          />
        )}
      </div>
      <p className="text-[14px] font-semibold text-black mt-5">{message}</p>
    </div>
  );
}
