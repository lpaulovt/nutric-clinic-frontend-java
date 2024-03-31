import User from "@/app/types/User";
import { axiosAuth, axiosInstace } from "@/lib/axios";
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import decode from "jwt-decode";

async function refreshAccessToken(token: any) {
  try {
    const res = await axiosInstace.post("/api/token-refresh/", {
      refresh: token?.user.refresh,
      id: token?.user.id,
    });

    token.user = res.data;

    console.log("refreshAccessToken", res.data);

    axiosAuth.defaults.headers.common.Authorization = `Bearer ${res.data?.access}`;
    axiosAuth.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${res.data?.access}`;
        console.log("refresh route");
        return config;
      },
      (error) => Promise.reject(error),
    );

    return token;
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

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
      if (user) {
        token.user = user;

        return token;
      }
      //@ts-ignore
      const decodedToken: User = decode(token.user.access);

      if (Date.now() < decodedToken.exp) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
