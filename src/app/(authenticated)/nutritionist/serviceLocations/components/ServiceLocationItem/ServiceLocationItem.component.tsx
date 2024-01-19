"use client";

import { LabelColumn } from "@/components/designSystem/LabelColumn";
import { ServiceLocationItemProps } from "./ServiceLocationItem.types";
import { DeleteModal } from "../../../patients/components/DeleteModal";

export function ServiceLocationItem({
  fullName,
  city,
  neighborhood,
  number,
  state,
  street,
  zipcode,
}: ServiceLocationItemProps) {
  return (
    <div className="w-full flex flex-row justify-between items-center py-4 px-2 border-b border-b-gray100 cursor-pointer hover:bg-[#F5F5F5]">
      <div className="flex flex-row justify-start items-center gap-8">
        <LabelColumn
          label={fullName}
          value={`${street}, ${number}, ${neighborhood}, ${city}/${state} - ${zipcode}`}
        />
      </div>

      <DeleteModal
        title="Tem certeza que deseja excluir o local"
        subtitle="Isso ira excluir permanentemente o local."
        onConfirm={() => {}}
      />
    </div>
  );
}
