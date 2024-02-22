"use client";

import { signIn } from "@/auth";
import SocialSignInButton from "@/components/SocialSignInButton";
import Link from "next/link";
import Image from "next/image";
import FormSeparator from "@/components/FormSeparator";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/lib/actions";

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      <ChevronRightIcon className="h-4 w-4" />
      Register
    </Button>
  );
}

export default function RegisterPage() {
  const [errorMessage, dispatch] = useFormState(register, undefined);
  return (
    <div className="bg-white flex gap-20 my-12 rounded-xl">
      <div className="p-6 flex-1">
        <h2>Create an account</h2>
        <p>
          Already have an account? <Link href="/login">Log in</Link>
        </p>

        {/* <div className="grid gap-3">
          <SocialSignInButton provider="facebook" />
          <SocialSignInButton provider="google" />
          <SocialSignInButton provider="twitter" />
        </div> */}
        <div className="my-4">
          <FormSeparator text="or" />
        </div>
        <div>
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
        </div>
      </div>
      <div className="basis-96">
        <Image
          src="/signin-bg.png"
          width={384}
          height={953}
          alt="Picture of the author"
        />
      </div>

      {/* <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">login with google</button>
      </form> */}
    </div>
  );
}