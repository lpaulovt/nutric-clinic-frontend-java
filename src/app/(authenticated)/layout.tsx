import { ReactNode } from "react";

import { Header } from "@/components/designSystem/Header";
import SideBar from "@/components/designSystem/SideBar";
import { DataProvider } from "../context/DataProvider";

interface AppLayoutProps {
  children: ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <DataProvider>
      <div className="flex flex-col min-w-screen max-h-screen overflow-hidden">
        <Header />

        <div className="grid w-full grid-cols-[16rem_1fr] max-h-screen overflow-y-hidden">
          <SideBar />

          <main className=" w-full px-6 py-10 overflow-y-auto">{children}</main>
        </div>
      </div>
    </DataProvider>
  );
}
