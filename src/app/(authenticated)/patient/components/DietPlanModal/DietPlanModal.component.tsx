"use client";

import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusCircle, Settings2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { DietPlanModalProps, formSchema } from ".";
import { DietPlanForm } from "./DietPlanModal.form";
import { useCreateMealPlan } from "@/app/services/mealPlan/useCreate";
import { useData } from "@/app/hooks/useData";
import { usePatchMealPlan } from "@/app/services/mealPlan/usePatch";
import { ErrorHandler } from "@/utils/errorHandler";
import { IMealPlan } from "@/app/types/MealPlan";

export function DietPlanModal({ values, type, onSuccess }: DietPlanModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { patient } = useData();
  const { mutateAsync: createMealPlan } = useCreateMealPlan();
  const { mutateAsync: updateMealPlan } = usePatchMealPlan(values?.id || "");

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values, values.daysOfWeek.toString());

    try {
      const dataRequest = {
        name: values.name,
        daysOfWeek: values.daysOfWeek.toString(),
        status: "ativo",
        patientId: patient.id,
      } as Partial<IMealPlan>;

      if (type === "CREATE") {
        await createMealPlan(dataRequest);
        toast({
          title: "Tudo pronto!",
          description:
            "Plano alimentar cadastrado com sucesso, acesse para detalhar",
        });
      } else {
        await updateMealPlan(dataRequest);
        toast({
          title: "Plano alimentar atualizado",
        });
      }

      onSuccess && onSuccess();
    } catch (error) {
      ErrorHandler(error);
    }
    handleShow();
  };

  const modalConfig = {
    CREATE: {
      icon: <PlusCircle className="text-brand" />,
      title: "Criar plano alimentar",
      description: "Informe o nome do plano e uma observação.",
    },
    UPDATE: {
      icon: <Settings2 className="text-brand" />,
      title: "Editar plano alimentar",
      description: "Informe o nome do plano e uma observação.",
    },
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow}>
        {modalConfig[type].icon}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>{modalConfig[type].title}</DialogTitle>
          <DialogDescription>{modalConfig[type].description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <DietPlanForm
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
