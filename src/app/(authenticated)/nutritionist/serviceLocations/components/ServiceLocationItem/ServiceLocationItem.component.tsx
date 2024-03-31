"use client";

import { LabelColumn } from "@/components/designSystem/LabelColumn";
import { ServiceLocationItemProps } from "./ServiceLocationItem.types";
import { DeleteModal } from "../../../patients/components/DeleteModal";
import { useDeleteAddress } from "@/app/services/address/useDelete";
import { ErrorHandler } from "@/utils/errorHandler";

export function ServiceLocationItem({
  full_name,
  city,
  neighborhood,
  number,
  state,
  street,
  cep,
  id,
  postAction,
}: ServiceLocationItemProps) {
  const { mutateAsync: deleteAddress } = useDeleteAddress();
  const handleDeleteAddress = async () => {
    try {
      await deleteAddress(id);
      postAction && postAction();
    } catch (error) {
      ErrorHandler(error);
    }
  };
  return (
    <div className="w-full flex flex-row justify-between items-center py-4 px-2 border-b border-b-gray100 cursor-pointer hover:bg-[#F5F5F5]">
      <div className="flex flex-row justify-start items-center gap-8">
        <LabelColumn
          label={full_name}
          value={`${street}, ${number}, ${neighborhood}, ${city}/${state} - ${cep}`}
        />
      </div>

      <DeleteModal
        title="Tem certeza que deseja excluir o local"
        subtitle="Isso ira excluir permanentemente o local."
        onConfirm={handleDeleteAddress}
      />
    </div>
  );
}
