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
import { AssessmentModalForm } from "./AssessmentModal.form";

export function AssessmentModal({ values }: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    toast({
      title: "Tudo certo!",
      description:
        "Avaliação antropométrica cadastrada com sucesso, acesse para visualizar",
    });
    handleShow();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow}>
        <PlusCircle className="text-indigo" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Criar avaliação antropométrica</DialogTitle>
          <DialogDescription>Informe os dados da avaliação.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AssessmentModalForm
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
