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
import { PatientModalProps, formSchema } from ".";
import { PatientForm } from "./PatientModal.form";

export function PatientModal({ type = "CREATE", values }: PatientModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    toast({
      title: "Cadastro realizado com sucesso",
      description:
        "Paciente cadastro com sucesso, agora você pode cadastrar plano alimentar, fazer receitas e inserir  avaliações antoprométicas",
    });
    handleShow();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow}>
        {type === "CREATE" ? (
          <PlusCircle className="text-brand" />
        ) : (
          <Settings2 className="text-brand" />
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Cadastrar Paciente</DialogTitle>
          <DialogDescription>Informe os dados do paciente.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <PatientForm
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
