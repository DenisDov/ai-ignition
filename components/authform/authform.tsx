"use client";

import { signIn } from "@/auth";
import SocialSignInButton from "@/components/SocialSignInButton";
import Link from "next/link";
import Image from "next/image";
import FormSeparator from "@/components/FormSeparator";
import { Button } from "@/components/ui/button";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/lib/actions";
import { ReloadIcon } from "@radix-ui/react-icons";

function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending} disabled={pending}>
      {pending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Please wait..." : "Sign up"}
    </Button>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending} disabled={pending}>
      {pending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Please wait..." : "Sign in"}
    </Button>
  );
}

export default function AuthForm({ type }: { type: string }) {
  const [errorMessage, dispatch] = useFormState(register, undefined);
  return (
    <form action={dispatch}>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
      />

      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id="password"
        type="password"
        name="password"
        placeholder="Enter password"
        required
        minLength={6}
      />
      {type === "register" ? <RegisterButton /> : <LoginButton />}

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <p className="text-sm text-red-500">{errorMessage.message}</p>
        )}
      </div>
    </form>
  );
}
