import { BackgroundImage } from "@/components/designSystem/BackgroundImage";
import Image from "next/image";
import { ReactNode } from "react";
import logo from "@/assets/logoWithName.svg";

interface AppLayoutProps {
  children: ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative min-w-screen max-h-screen flex flex-row justify-end">
      <BackgroundImage />
      <main className="w-1/2 flex max-h-screen flex-col items-center justify-between">
        <div className="w-[85%] flex flex-col items-center justify-center w-full  bg-background p-24 ">
          <Image src={logo} height={40} width={180} alt="Logo NutriClinic" />
          {children}
        </div>
      </main>
    </div>
  );
}
