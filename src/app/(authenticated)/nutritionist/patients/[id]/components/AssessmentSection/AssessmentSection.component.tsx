"use client";

import { Title } from "@/components/designSystem/Title";
import { Ruler } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";
import { AssessmentModal } from "../../../components/AssessmentModal";

export function AssessmentSection() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Avaliações antropométricas"
        underlineWidth="50%"
        underlineColor="[#6366F1]"
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
        />

        <ListItem
          icon={<Ruler className="text-white" />}
          iconBgColor="bg-[#6366F1]"
          chevronColor="text-[#6366F1]"
          title="Primeira Avaliação"
          subtitle="13/12/2023"
        />

        <ListItem
          icon={<Ruler className="text-white" />}
          iconBgColor="bg-[#6366F1]"
          chevronColor="text-[#6366F1]"
          title="Primeira Avaliação"
          subtitle="13/12/2023"
        />
      </div>
    </div>
  );
}
