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

import { Settings2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ModalProps, formSchema } from ".";
import { StatusModalForm } from "./StatusModal.form";

export function StatusModal({ values }: ModalProps) {
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
        <Settings2 className="text-brand" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Status do paciente</DialogTitle>
          <DialogDescription>
            Atenção, ao desativar o paciente ele deixará de ter acesso e
            visualizar informações de planos alimentares entre outros.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <StatusModalForm
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
