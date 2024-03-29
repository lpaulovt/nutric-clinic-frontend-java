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
import { MessageForm } from "./MessageModal.form";
import { useCreateMessage } from "@/app/services/messages/useCreate";
import { ErrorHandler } from "@/utils/errorHandler";
import { useAuth } from "@/app/(authenticated)/hooks/useAuth";

export function MessageModal({ values, type, postAction }: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { id } = useAuth();
  const { mutateAsync: createMessage } = useCreateMessage();
  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createMessage({
        message: values.description,
        user: id,
      });

      postAction && postAction();

      toast({
        title: "Tudo pronto!",
        description: "Recado cadastrado com sucesso.",
      });
      handleShow();
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const modalConfig = {
    CREATE: {
      icon: <PlusCircle className="text-brand" />,
      title: "Criar recado",
      description: "",
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
          <MessageForm
            onSubmit={onSubmit}
            onClose={handleShow}
            values={values}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
