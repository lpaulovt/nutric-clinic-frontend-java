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
import { MealForm } from "./FoodModal.form";

export function FoodModal({ values, type }: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    toast({
      title: "Tudo pronto!",
      description: "Refeição cadastrada com sucesso.",
    });
    handleShow();
  };

  const modalConfig = {
    CREATE: {
      icon: <PlusCircle className="text-brand cursor-pointer" />,
      title: "Cadastrar alimento",
      description: "Informe os dados do alimento",
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
