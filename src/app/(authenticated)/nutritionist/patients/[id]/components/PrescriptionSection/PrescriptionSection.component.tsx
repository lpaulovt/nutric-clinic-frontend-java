"use client";

import { Title } from "@/components/designSystem/Title";
import { FileHeart } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";
import { PrescriptionModal } from "../../../components/PrescriptionModal";
import { DeleteModal } from "../../../components/DeleteModal";
import { ViewPrescriptionModal } from "@/components/designSystem/ViewPrescriptionModal";

export function PrescriptionSection() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Receitas"
        underlineWidth="50%"
        showRightButton
        rightButton={<PrescriptionModal />}
        underlineColor="after:bg-[#3B82F6]"
      />

      <div className="flex flex-col">
        <ListItem
          icon={<FileHeart className="text-white" />}
          iconBgColor="bg-[#3B82F6]"
          chevronColor="text-[#3B82F6]"
          title="Receita para Franciso Júnior Silva"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewPrescriptionModal />

              <DeleteModal
                title="Tem certeza que deseja excluir a receita "
                subtitle="Isso ira excluir permanentemente a receita."
                onConfirm={() => {}}
              />
            </div>
          }
        />

        <ListItem
          icon={<FileHeart className="text-white" />}
          iconBgColor="bg-[#3B82F6]"
          chevronColor="text-[#3B82F6]"
          title="Receita para Franciso Júnior Silva"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewPrescriptionModal />

              <DeleteModal
                title="Tem certeza que deseja excluir a receita "
                subtitle="Isso ira excluir permanentemente a receita."
                onConfirm={() => {}}
              />
            </div>
          }
        />

        <ListItem
          icon={<FileHeart className="text-white" />}
          iconBgColor="bg-[#3B82F6]"
          chevronColor="text-[#3B82F6]"
          title="Receita para Franciso Júnior Silva"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewPrescriptionModal />

              <DeleteModal
                title="Tem certeza que deseja excluir a receita "
                subtitle="Isso ira excluir permanentemente a receita."
                onConfirm={() => {}}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
