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
import { ErrorHandler } from "@/utils/errorHandler";
import { useData } from "@/app/hooks/useData";
import { IPatient } from "@/app/types/Patient";
import { usePatchPatient } from "@/app/services/patient/usePatch";

export function StatusModal({ values, onSuccess }: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { patient } = useData();
  const { mutateAsync: updatePatient } = usePatchPatient(patient.id);

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const dataRequest = {
        ...patient,
        status: values.status,
      } as Partial<IPatient>;

      await updatePatient(dataRequest);
      toast({
        title: "Status atualizado",
      });
      onSuccess && onSuccess();
    } catch (error) {
      ErrorHandler(error);
    }

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
