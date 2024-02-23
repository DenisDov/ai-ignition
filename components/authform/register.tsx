"use client";

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

export default function RegisterForm() {
  const [errorMessage, dispatch] = useFormState(register, undefined);
  return (
    <form action={dispatch}>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              className="w-full border-b-2 border-gray-200 py-[9px]  text-sm placeholder:text-gray-500 outline-none"
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Jane"
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              className="w-full border-b-2 border-gray-200 py-[9px]  text-sm placeholder:text-gray-500 outline-none"
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Doe"
              required
              minLength={6}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input
            className="w-full border-b-2 border-gray-200 py-[9px]  text-sm placeholder:text-gray-500 outline-none"
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
            className="w-full border-b-2 border-gray-200 py-[9px]  text-sm placeholder:text-gray-500 outline-none"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={6}
          />
        </div>
      </div>
      <RegisterButton />

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
