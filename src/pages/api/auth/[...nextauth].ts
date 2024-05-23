import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "utils/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
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
  pages: {
    signIn: "/admin/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

export default NextAuth(authOptions);
