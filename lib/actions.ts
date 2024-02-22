"use server";

import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getUser } from "./data";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const email = formData.get("email");
    const user = await getUser(email);
    if (!user) await signIn("credentials", formData);
    return "User registered with another social provider";
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

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function register(prevState: State, formData: FormData) {
  // Validate form using Zod
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

  const user = await getUser(email);

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const credentials = "credentials";

    // Insert data into the database
    try {
      await sql`
      INSERT INTO users (email, password, registration_method)
      VALUES (${email}, ${hashedPassword}, ${credentials})
    `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: "Database Error: Failed to Create User.",
      };
    }
  } else {
    return {
      message: "User already exist",
    };
  }
}
