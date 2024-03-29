"use client";

import { DeleteModal } from "@/app/(authenticated)/nutritionist/patients/components/DeleteModal";
import { useDeleteMessage } from "@/app/services/messages/useDelete";
import { ErrorHandler } from "@/utils/errorHandler";
import { AlertCircle } from "lucide-react";

export interface CardMessageProps {
  id: number;
  message: string;
  type?: "VIEW" | "DELETE";
  postAction?: () => void;
}

export function CardMessage({
  id,
  message,
  type = "VIEW",
  postAction,
}: CardMessageProps) {
  const { mutateAsync: deleteMessage } = useDeleteMessage();

  const handleDeleteMessage = async () => {
    try {
      await deleteMessage(id);
      postAction && postAction();
    } catch (error) {
      ErrorHandler(error);
    }
  };
  return (
    <div className="flex flex-col max-w-[356px] justify-between items-start w-full border border-gray100 rounded-md p-4 ">
      <div className="w-full flex flex-row justify-between">
        <AlertCircle className="text-[#efcb6e]" />

        {type === "DELETE" && (
          <DeleteModal
            title="Tem certeza que deseja excluir o recado "
            subtitle="Isso ira excluir permanentemente o recado."
            onConfirm={handleDeleteMessage}
          />
        )}
      </div>
      <p className="text-[14px] font-semibold text-black mt-5 text-left">
        {message}
      </p>
    </div>
  );
}
