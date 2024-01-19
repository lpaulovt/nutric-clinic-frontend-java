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

import { useState } from "react";
import { ModalProps } from ".";

import { Button } from "@/components/ui/button";

export function FinishModal({
  title,
  subtitle,
  onConfirm,
  buttonConfirmLabel = "Finalizar",
}: ModalProps) {
  const [open, setOpen] = useState(false);

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
        <Button>Finalizar</Button>
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

          <Button onClick={onClick}>{buttonConfirmLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
