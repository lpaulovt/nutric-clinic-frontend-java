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
import { ModalProps, formSchema } from ".";
import { MealForm } from "./MealModal.form";
import { useCreateMeal } from "@/app/services/meal/useCreate";
import { usePatchMeal } from "@/app/services/meal/usePatch";
import { IMeal } from "@/app/types/Meal";
import { ErrorHandler } from "@/utils/errorHandler";

export function MealModal({
  values,
  type,
  onSuccess,
  mealPlanId,
  mealId,
}: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { mutateAsync: createMeal } = useCreateMeal();
  const { mutateAsync: updateMeal } = usePatchMeal(mealId);

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log(value);

    try {
      const dataRequest = {
        name: value.name,
        time: value.time,
        mealPlanId,
      } as Partial<IMeal>;

      if (type === "CREATE") {
        await createMeal(dataRequest);

        toast({
          title: "Tudo pronto!",
          description: "Refeição cadastrada com sucesso.",
        });
      } else {
        await updateMeal(dataRequest);
        toast({
          title: "Refeição atualizada",
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
      title: "Cadastrar refeição",
      description: "Informe os dados da refeição",
    },
    UPDATE: {
      icon: <Settings2 className="text-brand" />,
      title: "Editar refeição",
      description: "Informe os dados da refeição",
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
          <MealForm onSubmit={onSubmit} onClose={handleShow} values={values} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
