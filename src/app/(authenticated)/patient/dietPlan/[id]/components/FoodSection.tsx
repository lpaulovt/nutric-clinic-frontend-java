"use client";

import { AccordionContent } from "@/components/ui/accordion";

import { Spin } from "@/components/designSystem/Spin";
import { useFindAllFood } from "@/app/services/food/useFindAll";

interface FoodSectionProps {
  mealId: string;
}

export function FoodSection({ mealId }: FoodSectionProps) {
  const { data, isLoading } = useFindAllFood(mealId);

  return (
    <AccordionContent className="flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2">
        <h3 className="text-[20px] font-semibold text-black flex flex-row items-center gap-2">
          Alimentos{" "}
        </h3>

        {isLoading && <Spin />}
        {!isLoading && data?.foods.length === 0 && (
          <p>Ainda não há alimentados cadastrados.</p>
        )}
        {!isLoading &&
          data &&
          data.foods.map((item) => (
            <span
              key={item.id}
              className="text-[16px] font-medium text-gray500 flex flex-row items-center gap-2"
            >
              • {item.name} ({item.measure}/Servir: {item.quantity}){" "}
            </span>
          ))}
      </div>
    </AccordionContent>
  );
}
