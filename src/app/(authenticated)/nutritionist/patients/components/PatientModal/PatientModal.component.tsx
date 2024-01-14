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

  const modalConfig = {
    CREATE: {
      icon: <PlusCircle className="text-brand" />,
      title: "Cadastrar Paciente",
      description: "Informe os dados do paciente.",
    },
    UPDATE: {
      icon: <Settings2 className="text-brand" />,
      title: "Editar dados pessoais",
      description: "Edite os dados do paciente.",
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
