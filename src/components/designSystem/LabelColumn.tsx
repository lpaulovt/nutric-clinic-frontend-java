"use client";

export interface LabelColumnProps {
  label: string;
  value: string;
}

export function LabelColumn({ label, value }: LabelColumnProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-[16px] text-black font-semibold">{label}</h1>
      <span className="text-[12px] text-gray400 font-regular">{value}</span>
    </div>
  );
}
