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
import { ModalProps, formSchema } from ".";
import { PrescriptionModalForm } from "./PrescriptionModal.form";

export function PrescriptionModal({ values }: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    toast({
      title: "Tudo certo!",
      description: "Receita cadastrada com sucesso, acesse para visualizar",
    });
    handleShow();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow}>
        <PlusCircle className="text-[#3b82f6]" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Criar receita</DialogTitle>
          <DialogDescription>Informe os dados da receita.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <PrescriptionModalForm
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
