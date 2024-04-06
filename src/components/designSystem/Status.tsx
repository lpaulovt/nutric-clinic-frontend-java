"use client";

export interface StatusProps {
  status: string;
}

export function Status({ status }: StatusProps) {
  return (
    <div
      className={`w-fit px-4 py-1 rounded-[8px]  ${
        status === "ativo" ? "bg-[#D2EFD4]" : "bg-[#faefd3]"
      }`}
    >
      <span
        className={`text-[12px] leading-3 font-semibold ${
          status === "ativo" ? "text-brand" : "text-[#f5bc29]"
        }`}
      >
        {status === "ativo" ? "Ativo" : "Inativo"}
      </span>
    </div>
  );
}
