import { axiosInstace } from "@/lib/axios";
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axiosInstace.post("/api/token/", {
            username: credentials?.username,
            password: credentials?.password,
          });

          if (response.data !== null) {
            return response.data;
          }

          return null;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            throw new Error(JSON.stringify(error));
          } else {
            console.error(error);
            throw new Error("Tente novamente mais tarde.");
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
  },

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
