"use client";

import { AccordionContent } from "@/components/ui/accordion";

import { Spin } from "@/components/designSystem/Spin";
import { ErrorHandler } from "@/utils/errorHandler";
import { useFindAllFood } from "@/app/services/food/useFindAll";
import { useDeleteFood } from "@/app/services/food/useDelete";
import { FoodModal } from "../../../components/FoodModal";
import { DeleteModal } from "../../../components/DeleteModal";

interface FoodSectionProps {
  mealId: string;
}

export function FoodSection({ mealId }: FoodSectionProps) {
  const { data, isLoading, refetch } = useFindAllFood(mealId);
  const { mutateAsync: deleteFood } = useDeleteFood();

  async function handleDelete(id: string) {
    try {
      await deleteFood(id);
      await refetch();
    } catch (error) {
      ErrorHandler(error);
    }
  }

  return (
    <AccordionContent className="flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2">
        <h3 className="text-[20px] font-semibold text-black flex flex-row items-center gap-2">
          Alimentos{" "}
          <FoodModal
            type="CREATE"
            mealId={mealId}
            onSuccess={() => refetch()}
          />
        </h3>

        {isLoading && <Spin />}
        {!isLoading && data?.foods.length === 0 && (
          <p>
            Ainda não há alimentados cadastrados. Clique no ícone de (+) para
            adicionar um novo.
          </p>
        )}
        {!isLoading &&
          data &&
          data.foods.map((item) => (
            <span
              key={item.id}
              className="text-[16px] font-medium text-gray500 flex flex-row items-center gap-2"
            >
              • {item.name} ({item.measure}/Servir: {item.quantity}){" "}
              <DeleteModal
                title="Tem certeza que deseja excluir a refeição"
                subtitle="Uso ira excluir permanentemente essa refeição e o paciente não terá mais acesso."
                onConfirm={() => handleDelete(item.id)}
              />
            </span>
          ))}
      </div>
    </AccordionContent>
  );
}
