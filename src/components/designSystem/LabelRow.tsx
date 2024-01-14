"use client";

export interface LabelRowProps {
  label: string;
  value: string;
}

export function LabelRow({ label, value }: LabelRowProps) {
  return (
    <div className="flex flex-row items-center gap-1">
      <h1 className="text-[12px] text-black font-semibold">{label}</h1>
      <span className="text-[12px] text-gray500 font-semibold">{value}</span>
    </div>
  );
}
