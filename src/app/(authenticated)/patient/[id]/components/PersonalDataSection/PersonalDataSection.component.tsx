"use client";

import { useData } from "@/app/hooks/useData";

export function PersonalDataSection() {
  const { patient } = useData();
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[18px] font-semibold text-black">
        Olá, {patient.name}!
      </h3>

      <h3>Visualize a baixo seus planos alimentares ativos.</h3>
    </div>
  );
}
