"use client";

import { Title } from "@/components/designSystem/Title";
import { FileHeart } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";
import { PrescriptionModal } from "../../../components/PrescriptionModal";

export function PrescriptionSection() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Receitas"
        underlineWidth="50%"
        showRightButton
        rightButton={<PrescriptionModal />}
        underlineColor="[#3B82F6]"
        onClick={() => {}}
      />

      <div className="flex flex-col">
        <ListItem
          icon={<FileHeart className="text-white" />}
          color="[#3B82F6]"
          title="Receita para Franciso Júnior Silva"
          subtitle="13/12/2023"
        />

        <ListItem
          icon={<FileHeart className="text-white" />}
          color="[#3B82F6]"
          title="Receita para Franciso Júnior Silva"
          subtitle="13/12/2023"
        />

        <ListItem
          icon={<FileHeart className="text-white" />}
          color="[#3B82F6]"
          title="Receita para Franciso Júnior Silva"
          subtitle="13/12/2023"
        />
      </div>
    </div>
  );
}
