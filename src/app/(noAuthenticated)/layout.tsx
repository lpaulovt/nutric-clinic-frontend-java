import { BackgroundImage } from "@/components/designSystem/BackgroundImage";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-w-screen min-h-screen grid grid-cols-[50%_1fr]">
      <BackgroundImage />
      {children}
    </div>
  );
}
