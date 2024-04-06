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
import { useCreatePatient } from "@/app/services/patient/useCreate";
import { ErrorHandler } from "@/utils/errorHandler";
import { IPatient } from "@/app/types/Patient";
import { usePatchPatient } from "@/app/services/patient/usePatch";
import { useData } from "@/app/hooks/useData";

export function PatientModal({
  type = "CREATE",
  values,
  onSuccess,
}: PatientModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { patient } = useData();
  const { mutateAsync: createPatient } = useCreatePatient();
  const { mutateAsync: updatePatient } = usePatchPatient(patient.id);
  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const dataRequest = {
        name: values.name,
        age: values.age,
        gender: values.gender,
        phone: values.phone,
        cpf: values.cpf,
        status: "ativo",
      } as Partial<IPatient>;

      if (type === "CREATE") {
        await createPatient(dataRequest);
        toast({
          title: "Cadastro realizado com sucesso",
          description:
            "Paciente cadastro com sucesso, agora você pode cadastrar plano alimentar, fazer receitas e inserir  avaliações antoprométicas",
        });
      } else {
        await updatePatient(dataRequest);
        toast({
          title: "Paciente atualizado",
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
