"use server";

import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getUser } from "./data";
import { User } from "./definitions";

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function login(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function register(prevState: any, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  // Prepare data for insertion into the database
  const { email, password } = validatedFields.data;

  const user: User = await getUser(email);

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const credentials = "credentials";

    // Insert data into the database
    try {
      await sql`
      INSERT INTO users (email, password, registration_method)
      VALUES (${email}, ${hashedPassword}, ${credentials})
    `;
      await signIn("credentials", { email, password });
    } catch (error) {
      if (error instanceof AuthError) {
        return "Something went wrong.";
      }
      throw error;
    }
  }
}
