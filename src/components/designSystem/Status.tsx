"use client";

export interface StatusProps {
  status: "ACTIVE" | "INACTIVE";
}

export function Status({ status }: StatusProps) {
  return (
    <div
      className={`w-fit px-4 py-1 rounded-[8px]  ${
        status === "ACTIVE" ? "bg-[#D2EFD4]" : "bg-[#faefd3]"
      }`}
    >
      <span
        className={`text-[12px] leading-3 font-semibold ${
          status === "ACTIVE" ? "text-brand" : "text-[#f5bc29]"
        }`}
      >
        {status === "ACTIVE" ? "Ativo" : "Inativo"}
      </span>
    </div>
  );
}
