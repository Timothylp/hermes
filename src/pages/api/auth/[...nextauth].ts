import { User } from "@prisma/client";
import NextAuth, {Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../server/db/client";

let userAccount: User | null = null;

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Adresse email", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },

      authorize: async (credentials, req) => {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (user) {
          const isValid = credentials?.password === user.password;

          if (isValid) {
            userAccount = user;
            return user;
          }
        }

        return null;
      },
    }),
  ],


  callbacks: {
    async session(session: Session) {
      if (userAccount !== null) {
        session.user = userAccount;
      } 
      return session;
    },
  },

  pages: {
    signIn: "/auth/signIn",
  },
};

export default NextAuth(authOptions);
