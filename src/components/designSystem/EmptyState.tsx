"use client";

import Image from "next/image";

export interface EmptyStateProps {
  imageSrc: string;
  messageFirstPart: string;
  messageLastPart: string;
  messageLink: string;
  onClick: () => void;
}

export function EmptyState({
  imageSrc,
  messageFirstPart,
  messageLastPart,
  messageLink,
  onClick,
}: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-6">
      <Image width={219} height={166} src={imageSrc} alt="Ilustração" />
      <h1 className="text-[16px] text-black font-regular">
        {messageFirstPart}
        <span
          className="text-brand cursor-pointer hover:underline"
          onClick={onClick}
        >
          {messageLink}
        </span>
        {messageLastPart}
      </h1>
    </div>
  );
}
