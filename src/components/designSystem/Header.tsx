"use client";

import Image from "next/image";

import logoWithNameWhite from "@/assets/logoWithNameWhite.svg";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const isPatient = !pathname.startsWith("/patient/");

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-brand px-10 py-5 flex justify-between items-center h-16">
      <Image
        src={logoWithNameWhite}
        height={30}
        width={180}
        alt="Logo NutriCLinic"
      />

      <div className="flex items-center justify-center gap-8">
        {isPatient && (
          <MenuIcon
            onClick={() => setShowMenu((oldValue) => !oldValue)}
            className="text-white cursor-pointer md:opacity-0 md:cursor-default"
          />
        )}
      </div>

      {showMenu && (
        <div className="absolute z-30 top-[64px] left-0 right-0 bottom-0 bg-white md:hidden animate-in fade-in-50">
          <SideBar />
        </div>
      )}
    </header>
  );
}
