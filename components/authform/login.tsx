"use client";

import { Button } from "@/components/ui/button";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/lib/actions";
import { ReloadIcon } from "@radix-ui/react-icons";

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" aria-disabled={pending} disabled={pending}>
      {pending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Please wait..." : "Sign in"}
    </Button>
  );
}

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(login, undefined);
  return (
    <form action={dispatch}>
      <div className="grid gap-4">
        <div>
          <label htmlFor="password">Email</label>
          <input
            className="w-full border-b-2 border-gray-200 py-[9px]  text-sm outline-none placeholder:text-gray-500"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="w-full border-b-2 border-gray-200 py-[9px]  text-sm outline-none placeholder:text-gray-500"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={6}
          />
        </div>
        <LoginButton />
      </div>

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </form>
  );
}
