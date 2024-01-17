"use client";

import { Title } from "@/components/designSystem/Title";
import { PieChart } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";
import { DietPlanModal } from "../../../components/DietPlanModal";

export function DietPlanSection() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Plano alimentar"
        underlineWidth="50%"
        showRightButton
        rightButton={<DietPlanModal />}
        onClick={() => {}}
      />

      <div className="flex flex-col">
        <ListItem
          icon={<PieChart className="text-white" />}
          iconBgColor="bg-brand"
          chevronColor="text-brand"
          title="Plano alimentar para Paulo"
          subtitle="Todos os dias"
          status={false}
        />

        <ListItem
          icon={<PieChart className="text-white" />}
          iconBgColor="bg-brand"
          chevronColor="text-brand"
          title="Plano alimentar para Paulo"
          subtitle="Todos os dias"
        />

        <ListItem
          icon={<PieChart className="text-white" />}
          iconBgColor="bg-brand"
          chevronColor="text-brand"
          title="Plano alimentar para Paulo"
          subtitle="Todos os dias"
          status={true}
        />
      </div>
    </div>
  );
}
