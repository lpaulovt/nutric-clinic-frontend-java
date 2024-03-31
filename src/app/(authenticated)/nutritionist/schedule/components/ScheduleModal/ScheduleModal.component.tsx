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
import { FormComponent } from "./ScheduleModal.form";
import { ErrorHandler } from "@/utils/errorHandler";
import { useCreateSchedule } from "@/app/services/schedule/useCreate";
import { useAuth } from "@/app/(authenticated)/hooks/useAuth";
import { formatDateUs } from "@/utils/formatDate";

export function ScheduleModal({
  type = "CREATE",
  values,
  postAction,
}: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { id } = useAuth();
  const { mutateAsync: createSchedule } = useCreateSchedule();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      await createSchedule({
        user: id,
        date_appointments: formatDateUs(values.date_appointments),
        service_location: values.serviceLocationId,
        //schedules //TODO
      });
      toast({
        title: "Tudo pronto!",
        description: "Agenda cadastrada com sucesso.",
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
      title: "Cadastrar dia de atendimento",
      description: "Informe o dia e os horários.",
    },
    UPDATE: {
      icon: <Settings2 className="text-brand" />,
      title: "Editar agenda",
      description: "Informe o dia e os horários.",
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
