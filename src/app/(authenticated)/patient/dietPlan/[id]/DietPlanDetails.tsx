"use client";

import { LabelColumn } from "@/components/designSystem/LabelColumn";
import { LabelRow } from "@/components/designSystem/LabelRow";
import { Title } from "@/components/designSystem/Title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import { UtensilsCrossed } from "lucide-react";
import { useFindOneMealPlan } from "@/app/services/mealPlan/useFindOne";
import { Spin } from "@/components/designSystem/Spin";
import { useFindAllMeals } from "@/app/services/meal/useFindAll";
import { FoodSection } from "./components/FoodSection";

interface DietPlanDetailsProps {
  id: string;
}

export function DietPlanDetails({ id }: DietPlanDetailsProps) {
  const { data, isLoading } = useFindOneMealPlan(id);
  const { data: mealsData, isLoading: isLoadingMeals } = useFindAllMeals(id);

  return (
    <>
      {isLoading && <Spin />}
      {!isLoading && data && (
        <main className="flex flex-col w-full gap-6">
          <Title title={data.name} />

          <div className="flex flex-col gap-2">
            <LabelRow label="Status:" value={data.status} />
          </div>

          <div className="flex flex-col gap-2">
            <Title title="Dias da semana" showRightButton={false} />

            <Tabs defaultValue="ALL" className="flex flex-row justify-start">
              <TabsList className="flex flex-wrap">
                {data.daysOfWeek?.split(",")?.map((item) => (
                  <TabsTrigger key={item} defaultChecked value="0">
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Title title="Refeições" />

            {isLoadingMeals && <Spin />}
            {!isLoadingMeals && mealsData && mealsData.meals.length === 0 && (
              <p>Ainda não há refeições cadastradas.</p>
            )}
            {!isLoadingMeals &&
              mealsData &&
              mealsData.meals.map((item) => (
                <Accordion key={item.id} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <div className="flex flex-row justify-between items-center gap-3">
                      <AccordionTrigger className="w-[100%]">
                        <div className="flex flex-row  gap-4 items-center ">
                          <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-brand">
                            <UtensilsCrossed className="text-white" />
                          </div>
                          <LabelColumn label={item.name} value={item.time} />
                        </div>
                      </AccordionTrigger>
                    </div>

                    <FoodSection mealId={item.id} />
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
        </main>
      )}
    </>
  );
}
