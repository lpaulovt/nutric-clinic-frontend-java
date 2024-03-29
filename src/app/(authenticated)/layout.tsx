import { ReactNode } from "react";

import { Header } from "@/components/designSystem/Header";
import SideBar from "@/components/designSystem/SideBar";
import { AuthProvider } from "./context/AuthProvider";
import { getServerSession } from "next-auth";
import { getUser } from "@/lib/auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface AppLayoutProps {
  children: ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const hasAuthenticated = await getServerSession(nextAuthOptions);
  const { profile, token, id } = await getUser();

  if (!hasAuthenticated) redirect("/");
  return (
    <AuthProvider data={{ profile: profile, token: token, id: id }}>
      <div className="flex flex-col min-w-screen max-h-screen overflow-hidden">
        <Header />

        <div className="grid w-full grid-cols-[16rem_1fr] max-h-screen overflow-y-hidden">
          <SideBar />

          <main className=" w-full px-6 py-10 overflow-y-auto">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
}
