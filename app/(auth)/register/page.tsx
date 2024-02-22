import SocialSignInButton from "@/components/SocialSignInButton";
import Link from "next/link";
import Image from "next/image";
import FormSeparator from "@/components/FormSeparator";

import AuthForm from "@/components/authform/authform";

export default function RegisterPage() {
  return (
    <div className="bg-white flex gap-20 my-12 rounded-xl">
      <div className="p-6 flex-1">
        <h2>Create an account</h2>
        <p>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
        <div className="grid gap-3 mt-4">
          <SocialSignInButton provider="facebook" />
          <SocialSignInButton provider="google" />
          <SocialSignInButton provider="twitter" />
        </div>
        <div className="my-4">
          <FormSeparator text="or" />
        </div>
        <div>
          <AuthForm type="register" />
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
    </div>
  );
}
