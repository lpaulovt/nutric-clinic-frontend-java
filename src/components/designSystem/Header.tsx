"use client";

import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";

import logoWithNameWhite from "@/assets/logoWithNameWhite.svg";

export function Header() {
  return (
    <header className="bg-brand px-10 py-5 flex justify-between items-center h-16">
      <Image
        src={logoWithNameWhite}
        height={30}
        width={180}
        alt="Logo NutriCLinic"
      />

      <div className="flex items-center justify-center gap-8">
        <Avatar>
          <AvatarFallback>PV</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
