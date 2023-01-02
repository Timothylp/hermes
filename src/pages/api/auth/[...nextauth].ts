import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../server/db/client";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Adresse email", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },

      authorize: async (credentials) => {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (user) {
          const isValid = credentials?.password === user.password;

          if (isValid) {
            return user;
          }
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signIn",
  },
};
export default NextAuth(authOptions);
