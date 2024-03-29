import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    access: string;
    refresh: string;
    id: number;
    type: string;
  }
}
