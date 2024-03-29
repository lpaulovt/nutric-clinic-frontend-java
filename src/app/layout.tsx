import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/providers/QueryProvider";
import { NextAuthSessionProvider } from "@/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NutriClinic",
  description: "Sistema clínico para nutricionistas",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
