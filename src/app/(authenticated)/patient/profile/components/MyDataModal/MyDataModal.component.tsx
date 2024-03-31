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
import { FormComponent } from "./MyDataModal.form";
import { ErrorHandler } from "@/utils/errorHandler";
import { usePatchProfile } from "@/app/services/profiles/usePatch";
import { formatDateUs } from "@/utils/formatDate";

export function MyDataModal({
  type = "CREATE",
  values,
  id,
  postAction,
}: ModalProps) {
  const { mutateAsync: updateProfile } = usePatchProfile(id);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      await updateProfile({
        fullName: values.fullName,
        dateOfBirth: formatDateUs(values.birthDate) as any,
        gender: values.gender,
        mail: values.mail,
        phone: values.phone,
        specialty: values.specialty,
        crn: values.crn,
      });
      toast({
        title: "Tudo pronto!",
        description: "Dados atualizados com sucesso.",
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
      title: "Cadastrar Paciente",
      description: "Informe os dados do paciente.",
    },
    UPDATE: {
      icon: <Settings2 className="text-brand" />,
      title: "Editar dados",
      description: "Atualize seus dados",
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
          <FormComponent
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
