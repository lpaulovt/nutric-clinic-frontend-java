"use client";

import { Title } from "@/components/designSystem/Title";
import { Ruler } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";
import { AssessmentModal } from "../../../components/AssessmentModal";
import { DeleteModal } from "../../../components/DeleteModal";
import { ViewAssessmentModal } from "@/components/designSystem/ViewAssessmentModal";

export function AssessmentSection() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Avaliações antropométricas"
        underlineWidth="50%"
        underlineColor="after:bg-[#6366F1]"
        showRightButton
        rightButton={<AssessmentModal />}
        onClick={() => {}}
      />

      <div className="flex flex-col">
        <ListItem
          icon={<Ruler className="text-white" />}
          iconBgColor="bg-[#6366F1]"
          chevronColor="text-[#6366F1]"
          title="Primeira Avaliação"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewAssessmentModal />
              <DeleteModal
                title="Tem certeza que deseja excluir a avaliação"
                subtitle="Isso ira excluir permanentemente a avaliação."
                onConfirm={() => {}}
              />
            </div>
          }
        />

        <ListItem
          icon={<Ruler className="text-white" />}
          iconBgColor="bg-[#6366F1]"
          chevronColor="text-[#6366F1]"
          title="Primeira Avaliação"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewAssessmentModal />

              <DeleteModal
                title="Tem certeza que deseja excluir a avaliação"
                subtitle="Isso ira excluir permanentemente a avaliação."
                onConfirm={() => {}}
              />
            </div>
          }
        />

        <ListItem
          icon={<Ruler className="text-white" />}
          iconBgColor="bg-[#6366F1]"
          chevronColor="text-[#6366F1]"
          title="Primeira Avaliação"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewAssessmentModal />

              <DeleteModal
                title="Tem certeza que deseja excluir a avaliação"
                subtitle="Isso ira excluir permanentemente a avaliação."
                onConfirm={() => {}}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
