import { ReactNode } from "react";

import { LayoutContent } from "./LayoutContent";

interface AppLayoutProps {
  children: ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return <LayoutContent>{children}</LayoutContent>;
}
