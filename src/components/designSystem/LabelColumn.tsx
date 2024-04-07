"use client";

import { Status } from "./Status";

export interface LabelColumnProps {
  label: string;
  value: string;
  status?: string;
}

export function LabelColumn({ label, value, status }: LabelColumnProps) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-[16px] text-black font-semibold">{label}</h1>
      <span className="text-[12px] text-gray400 font-regular">{value}</span>

      {status !== undefined && (
        <div className="flex sm:hidden">
          <Status status={status ? "ativo" : "inativo"} />
        </div>
      )}
    </div>
  );
}
