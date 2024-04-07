"use client";

import { Title } from "@/components/designSystem/Title";
import { PieChart } from "lucide-react";
import { ListItem } from "@/components/designSystem/ListItem";
import { DietPlanModal } from "../../../components/DietPlanModal";
import { useRouter } from "next/navigation";
import { useData } from "@/app/hooks/useData";
import { useFindAllMealPlans } from "@/app/services/mealPlan/useFindAll";
import { Spin } from "@/components/designSystem/Spin";

interface DietPlanSectionProps {}

export function DietPlanSection({}: DietPlanSectionProps) {
  const router = useRouter();
  const { patient } = useData();
  const { data, isLoading, refetch } = useFindAllMealPlans(patient.id);
  const handleDietPlanDetails = (id: string) => {
    router.push(`dietPlan/${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Plano alimentar"
        underlineWidth="50%"
        showRightButton
        rightButton={
          <DietPlanModal type="CREATE" onSuccess={() => refetch()} />
        }
      />

      <div className="flex flex-col">
        {isLoading && <Spin />}
        {!isLoading && data?.mealPlans.length === 0 && (
          <p>
            Não há planos cadastrados ainda. Clique no ícone de (+) para
            cadastrar um novo.
          </p>
        )}
        {!isLoading &&
          data?.mealPlans.map((item) => (
            <ListItem
              key={item.id}
              icon={<PieChart className="text-white" />}
              iconBgColor="bg-brand"
              chevronColor="text-brand"
              title={item.name}
              subtitle={item.daysOfWeek}
              status={item.status === "ativo" ? true : false}
              onClick={() => handleDietPlanDetails(item.id)}
            />
          ))}
      </div>
    </div>
  );
}
