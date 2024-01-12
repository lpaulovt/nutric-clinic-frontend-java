import { ReactNode } from "react";

import { Header } from "@/components/designSystem/Header";
import SideBar from "@/components/designSystem/SideBar";

interface AppLayoutProps {
  children: ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  // const hasAuthenticated = await getServerSession(nextAuthOptions)
  // const { profile, token } = await getUser()

  // if (!hasAuthenticated) redirect('/')
  return (
    <div className="flex flex-col max-h-screen">
      <Header />

      <div className="grid h-full w-full grid-cols-[16rem_1fr]">
        <SideBar />
        <main className="flex w-full h-full overflow-auto">{children}</main>
      </div>
    </div>
  );
}
