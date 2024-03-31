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
import { ServiceLocationForm } from "./ServiceLocationModal.form";
import { ErrorHandler } from "@/utils/errorHandler";
import { useAuth } from "@/app/(authenticated)/hooks/useAuth";
import { useCreateAddress } from "@/app/services/address/useCreate";

export function ServiceLocationModal({
  type = "CREATE",
  values,
  postAction,
}: PatientModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { id } = useAuth();
  const { mutateAsync: createAddress } = useCreateAddress();
  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      await createAddress({
        full_name: values.city,
        cep: values.cep,
        street: values.street,
        number: values.number,
        neighborhood: values.neighborhood,
        city: values.city,
        state: values.state,
        user: id,
      });
      toast({
        title: "Tudo pronto!",
        description: "Local de atendimento cadastro com sucesso.",
      });
      postAction && postAction();
    } catch (error) {
      ErrorHandler(error);
    } finally {
      handleShow();
    }
  };

  const modalConfig = {
    CREATE: {
      icon: <PlusCircle className="text-brand" />,
      title: "Cadastrar local de atendimento",
      description: "Informe os dados do local.",
    },
    UPDATE: {
      icon: <Settings2 className="text-brand" />,
      title: "",
      description: "",
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
          <ServiceLocationForm
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
