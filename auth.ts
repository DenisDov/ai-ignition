import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { authConfig } from "./auth.config";
import { sql } from "@vercel/postgres";
import type { User } from "@/lib/definitions";
import bcrypt from "bcryptjs-react";
import { getUser } from "@/lib/data";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user: User = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user?.password!);

          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const email = profile?.email;
        const name = profile?.name;
        const user: User = await getUser(profile?.email!);
        if (!user) {
          try {
            await sql`
              INSERT INTO users (name, email, registration_method)
              VALUES (${name}, ${email}, ${account?.provider})
            `;
          } catch (error) {
            console.log("create user error: ", error);
          }
        }
      }
      return true;
    },
  },
});
