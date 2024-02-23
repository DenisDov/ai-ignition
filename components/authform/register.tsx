"use client";

import { Button } from "@/components/ui/button";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/lib/actions";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" aria-disabled={pending} disabled={pending}>
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
              className="w-full border-b-2 border-gray-200 py-[9px]  text-sm outline-none placeholder:text-gray-500"
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Jane"
              // required
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              className="w-full border-b-2 border-gray-200 py-[9px]  text-sm outline-none placeholder:text-gray-500"
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Doe"
              // required
            />
          </div>
        </div>
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
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" required />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Subscribe to our monthly newsletter
            </label>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            By clicking below you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <RegisterButton />
        <div>
          <p>
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {errorMessage && <p className="text-sm text-red-500">{errorMessage.toString()}</p>}
    </form>
  );
}
