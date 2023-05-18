import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "utils/prisma";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/admin/signin",
  },
  providers: [
    GoogleProvider({
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    }),
  ],
  callbacks: {
    async signIn(response: any) {
      const ADMINS =
        process.env.ADMINS?.split(",").map((email) => email.trim()) || [];
      const isAllowedToSignIn = ADMINS.includes(response.user.email);

      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
