import SocialSignInButton from "@/components/SocialSignInButton";
import Link from "next/link";
import Image from "next/image";
import FormSeparator from "@/components/FormSeparator";
import RegisterForm from "@/components/authform/register";

export default function RegisterPage() {
  return (
    <div className="mx-auto my-6 flex max-w-[960px] gap-20 rounded-xl bg-white lg:my-12">
      <div className="flex-1 p-6">
        <h2>Create an account</h2>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </p>
        <div className="my-4 grid gap-3">
          <SocialSignInButton provider="facebook" />
          <SocialSignInButton provider="google" />
          <SocialSignInButton provider="twitter" />
        </div>
        <div className="my-4">
          <FormSeparator text="or" />
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
      <div className="hidden basis-96 lg:block">
        <Image src="/signin-bg.png" width={384} height={953} alt="Picture of the author" />
      </div>
    </div>
  );
}
