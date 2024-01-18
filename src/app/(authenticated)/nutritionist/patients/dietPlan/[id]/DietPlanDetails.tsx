"use client";

import { LabelColumn } from "@/components/designSystem/LabelColumn";
import { LabelRow } from "@/components/designSystem/LabelRow";
import { Title } from "@/components/designSystem/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import { AlertCircle, UtensilsCrossed } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { DietPlanModal } from "../../components/DietPlanModal";
import { MealModal } from "../../components/MealModal";
import { FoodModal } from "../../components/FoodModal";
import { DeleteModal } from "../../components/DeleteModal";

export function DietPlanDetails() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Plano alimentar para Paulo Vitor"
        showRightButton
        rightButton={<DietPlanModal type="UPDATE" />}
      />

      <div className="flex flex-col gap-2">
        <LabelRow label="Status:" value="Ativo" />
        <LabelRow label="Descrição:" value="lorem ipsum lorem ipsum" />
        <LabelRow label="Observação:" value="Lorem ipsum" />
      </div>

      <div className="flex flex-col gap-2">
        <Title title="Dias da semana" showRightButton={false} />

        <Tabs defaultValue="ALL" className="w-[400px]">
          <TabsList>
            <TabsTrigger defaultChecked value="0">
              Segunda-feira
            </TabsTrigger>
            <TabsTrigger defaultChecked value="1">
              Terça-feira
            </TabsTrigger>
            <TabsTrigger value="2">Quarta-feira</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <Title
          title="Refeições"
          showRightButton
          rightButton={<MealModal type="CREATE" />}
        />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row  gap-4 items-center ">
                  <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-brand">
                    <UtensilsCrossed className="text-white" />
                  </div>
                  <LabelColumn label="Janta" value="18:00" />
                </div>

                <div className="flex flex-row items-center gap-3 pr-3">
                  <DeleteModal
                    title="Tem certeza que deseja excluir a refeição"
                    subtitle="Uso ira excluir permanentemente essa refeição e o paciente não terá mais acesso."
                    onConfirm={() => {}}
                  />

                  <MealModal type="UPDATE" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 items-start">
              <LabelRow
                icon={<AlertCircle />}
                label="Observação:"
                value="lorem ipsum lorem ipsum"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold text-black flex flex-row items-center gap-2">
                  Alimentos <FoodModal type="CREATE" />
                </h3>

                <span className="text-[16px] font-medium text-gray500 flex flex-row items-center gap-2">
                  • Arroz à grega (Colher De Arroz/Servir: 2){" "}
                  <DeleteModal
                    title="Tem certeza que deseja excluir a refeição"
                    subtitle="Uso ira excluir permanentemente essa refeição e o paciente não terá mais acesso."
                    onConfirm={() => {}}
                  />
                </span>

                <span className="text-[16px] font-medium text-gray500 flex flex-row items-center gap-2">
                  • Arroz à grega (Colher De Arroz/Servir: 2){" "}
                  <DeleteModal
                    title="Tem certeza que deseja excluir a refeição"
                    subtitle="Uso ira excluir permanentemente essa refeição e o paciente não terá mais acesso."
                    onConfirm={() => {}}
                  />
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
