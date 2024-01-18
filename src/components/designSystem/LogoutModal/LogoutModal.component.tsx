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
import { Icon } from "../Icon";

export function LogoutModal({ onLogout }: ModalProps) {
  const [open, setOpen] = useState(false);

  const handleShow = () => {
    setOpen((value) => !value);
  };

  const onClick = () => {
    onLogout();
    handleShow();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow} className="cursor-pointer">
        <button
          className={`group w-full h-9 flex gap-2 items-center px-3 rounded-md py-0.5 transition-all hover:bg-brand`}
        >
          <Icon
            name={"log-out"}
            height={16}
            width={16}
            className={`text-gray500 transition-all group-hover:text-white`}
          />
          <span
            className={`text-[14px] font-medium  transition-all  text-gray500 group-hover:text-white`}
          >
            Sair
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Tem certeza que deseja sair? </DialogTitle>
          <DialogDescription>
            Ao sair, todos os seus dados serão removidos e você precisará se
            autenticar novamente
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleShow} variant={"ghost"}>
            Cancelar
          </Button>

          <Button onClick={onClick}>Sair</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
