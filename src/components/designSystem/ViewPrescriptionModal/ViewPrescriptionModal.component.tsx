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

export function ViewPrescriptionModal({
  buttonLabel = "Fechar",
  buttonModal,
}: ModalProps) {
  const [open, setOpen] = useState(false);

  const handleShow = () => {
    setOpen((value) => !value);
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow} className="cursor-pointer">
        {buttonModal ? (
          buttonModal
        ) : (
          <Button
            className="text-[#3B82F6] bg-transparent"
            variant={"secondary"}
          >
            Ver mais
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Receita</DialogTitle>
          <DialogDescription>Feita em 11/12/2023</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start">
            <h1 className="text-[14px] text-black font-medium">Titulo</h1>
            <span className="text-[14px] text-gray400 font-regular">
              Adulto
            </span>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-[14px] text-black font-medium">Descrição </h1>
            <span className="text-[14px] text-gray400 font-regular">
              lorep ipsum
            </span>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleShow} variant={"outline"}>
            {buttonLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
