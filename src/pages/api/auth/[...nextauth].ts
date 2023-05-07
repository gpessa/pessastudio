import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log(process.env.AUTH_SECRET);
console.log(typeof process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
console.log(
  typeof process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID != undefined && "HERE"
);
console.log(typeof process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET);
console.log(
  typeof process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET != undefined && "HERE"
);

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
