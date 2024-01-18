"use client";

import { Title } from "@/components/designSystem/Title";
import { PieChart } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";
import { DietPlanModal } from "../../../components/DietPlanModal";
import { useRouter } from "next/navigation";

export function DietPlanSection() {
  const router = useRouter();

  const handleDietPlanDetails = () => {
    router.push(`dietPlan/10`);
  };

  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Plano alimentar"
        underlineWidth="50%"
        showRightButton
        rightButton={<DietPlanModal type="CREATE" />}
      />

      <div className="flex flex-col">
        <ListItem
          icon={<PieChart className="text-white" />}
          iconBgColor="bg-brand"
          chevronColor="text-brand"
          title="Plano alimentar para Paulo"
          subtitle="Todos os dias"
          status={false}
          onClick={handleDietPlanDetails}
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
          onClick={handleDietPlanDetails}
        />
      </div>
    </div>
  );
}
