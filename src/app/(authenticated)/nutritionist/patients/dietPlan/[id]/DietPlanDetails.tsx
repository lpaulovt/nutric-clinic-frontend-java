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
import { DietPlanModal } from "../../components/DietPlanModal";
import { MealModal } from "../../components/MealModal";
import { DeleteModal } from "../../components/DeleteModal";
import { useFindOneMealPlan } from "@/app/services/mealPlan/useFindOne";
import { Spin } from "@/components/designSystem/Spin";
import { useFindAllMeals } from "@/app/services/meal/useFindAll";
import { useDeleteMeal } from "@/app/services/meal/useDelete";
import { ErrorHandler } from "@/utils/errorHandler";
import { FoodSection } from "./components/FoodSection";
import { Button } from "@/components/ui/button";
import { useDeleteMealPlan } from "@/app/services/mealPlan/useDelete";
import { useRouter } from "next/navigation";

interface DietPlanDetailsProps {
  id: string;
}

export function DietPlanDetails({ id }: DietPlanDetailsProps) {
  const router = useRouter();

  const { data, isLoading, refetch } = useFindOneMealPlan(id);
  const {
    data: mealsData,
    isLoading: isLoadingMeals,
    refetch: refetchMeals,
  } = useFindAllMeals(id);
  const { mutateAsync: deleteMealPlan } = useDeleteMealPlan();
  const { mutateAsync: deleteMeal } = useDeleteMeal();

  async function handleDelete(id: string) {
    try {
      await deleteMeal(id);
      refetchMeals();
    } catch (error) {
      ErrorHandler(error);
    }
  }

  async function handleDeleteMealPlan(id: string) {
    try {
      await deleteMealPlan(id);

      router.back();
    } catch (error) {
      ErrorHandler(error);
    }
  }

  return (
    <>
      {isLoading && <Spin />}
      {!isLoading && data && (
        <main className="flex flex-col w-full gap-6">
          <Title
            title={data.name}
            showRightButton
            rightButton={
              <DietPlanModal
                type="UPDATE"
                values={data}
                onSuccess={() => refetch()}
              />
            }
          />

          <div className="flex flex-col gap-2">
            <LabelRow label="Status:" value={data.status} />
          </div>

          <div className="flex flex-col gap-2 pb-3">
            <Title title="Dias da semana" showRightButton={false} />

            <Tabs
              defaultValue="ALL"
              className="flex flex-row justify-start flex-wrap "
            >
              <TabsList>
                {data.daysOfWeek?.split(",")?.map((item) => (
                  <TabsTrigger key={item} defaultChecked value="0">
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Title
              title="Refeições"
              showRightButton
              rightButton={
                <MealModal
                  mealPlanId={data.id}
                  type="CREATE"
                  mealId="0"
                  onSuccess={() => refetch()}
                />
              }
            />

            {isLoadingMeals && <Spin />}
            {!isLoadingMeals && mealsData && mealsData.meals.length === 0 && (
              <p>
                Ainda não há refeições cadastradas. Clique no ícone (+) para
                criar uma nova.
              </p>
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
                      <div className="flex flex-row items-center gap-3 pr-3">
                        <DeleteModal
                          title="Tem certeza que deseja excluir a refeição"
                          subtitle="Uso ira excluir permanentemente essa refeição e o paciente não terá mais acesso."
                          onConfirm={() => handleDelete(item.id)}
                        />
                        <MealModal
                          type="UPDATE"
                          mealPlanId={data.id}
                          mealId={item.id}
                          values={item}
                          onSuccess={() => refetchMeals()}
                        />
                      </div>
                    </div>

                    <FoodSection mealId={item.id} />
                  </AccordionItem>
                </Accordion>
              ))}
          </div>

          <div className="flex flex-col gap-2">
            <Title title="Excluir " showRightButton={false} />
            <DeleteModal
              title="Tem certeza que deseja este plano alimentar"
              subtitle="Uso ira excluir permanentemente esse plano alimentar e o paciente não terá mais acesso."
              onConfirm={() => handleDeleteMealPlan(data.id)}
              buttonModal={
                <div>
                  <Button variant={"outline"} className="w-auto">
                    Excluir plano alimentar
                  </Button>
                </div>
              }
            />
          </div>
        </main>
      )}
    </>
  );
}
