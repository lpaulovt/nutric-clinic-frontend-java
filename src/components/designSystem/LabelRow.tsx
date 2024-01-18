"use client";

export interface LabelRowProps {
  icon?: React.ReactNode;
  label: string;
  value: string;
}

export function LabelRow({ label, value, icon }: LabelRowProps) {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="flex flex-row justify-center items-center gap-2">
        {icon}
        <h1 className="text-[12px] text-black font-semibold">{label}</h1>
      </div>
      <span className="text-[12px] text-gray500 font-semibold">{value}</span>
    </div>
  );
}
