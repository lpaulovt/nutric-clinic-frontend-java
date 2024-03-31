"use client";

import { Title } from "@/components/designSystem/Title";
import { PieChart } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
        showRightButton={false}
      />

      <div className="flex flex-col">
        <ListItem
          icon={<PieChart className="text-white" />}
          iconBgColor="bg-brand"
          chevronColor="text-brand"
          title="Plano alimentar para Paulo"
          subtitle="Todos os dias"
          onClick={handleDietPlanDetails}
          rightContent={<Button variant={"ghost"}>Ver mais</Button>}
        />
      </div>
    </div>
  );
}
