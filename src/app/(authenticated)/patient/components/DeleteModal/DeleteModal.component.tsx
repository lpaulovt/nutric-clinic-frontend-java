"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ModalProps } from ".";

import { Button } from "@/components/ui/button";

export function DeleteModal({
  title,
  subtitle,
  onConfirm,
  buttonConfirmLabel = "Excluir",
  buttonModal,
}: ModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onClick = () => {
    onConfirm();
    handleShow();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow} className="cursor-pointer">
        {buttonModal ? buttonModal : <Trash className="text-danger" />}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleShow} variant={"outline"}>
            Cancelar
          </Button>

          <Button onClick={onClick} variant={"destructive"}>
            {buttonConfirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
