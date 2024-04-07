"use client";

import { ReactNode } from "react";

import { Header } from "@/components/designSystem/Header";
import SideBar from "@/components/designSystem/SideBar";
import { DataProvider } from "../context/DataProvider";
import { usePathname } from "next/navigation";

interface LayoutContentProps {
  children: ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();
  const isPatient = !pathname.startsWith("/patient/");
  return (
    <DataProvider>
      <div className="flex flex-col min-w-screen max-h-screen overflow-hidden">
        <Header />

        <div
          className={`grid w-full ${
            isPatient && "md:grid-cols-[16rem_1fr]"
          }  max-h-screen overflow-y-hidden`}
        >
          {isPatient && (
            <div className="hidden md:flex">
              <SideBar />
            </div>
          )}

          <main className=" w-full px-6 py-10 overflow-y-auto">{children}</main>
        </div>
      </div>
    </DataProvider>
  );
}
