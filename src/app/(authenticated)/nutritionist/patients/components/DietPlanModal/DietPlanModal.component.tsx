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

import { PlusCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { DietPlanModalProps, formSchema } from ".";
import { DietPlanForm } from "./DietPlanModal.form";

export function DietPlanModal({ values }: DietPlanModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    toast({
      title: "Tudo pronto!",
      description:
        "Plano alimentar cadastrado com sucesso, acesse para detalhar",
    });
    handleShow();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow}>
        <PlusCircle className="text-brand" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Criar plano alimentar</DialogTitle>
          <DialogDescription>
            Informe o nome do plano e uma observação.
          </DialogDescription>
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
