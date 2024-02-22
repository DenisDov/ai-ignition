import SocialSignInButton from "@/components/SocialSignInButton";
import Link from "next/link";
import Image from "next/image";
import FormSeparator from "@/components/FormSeparator";
import LoginForm from "@/components/authform/login";

export default function LoginPage() {
  return (
    <div className="bg-white flex gap-20 my-12 rounded-xl">
      <div className="p-6 flex-1">
        <h2>Sign in</h2>
        <p>
          {`Don't have an account?`} <Link href="/register">Sign up</Link>
        </p>
        <div className="grid gap-3">
          <SocialSignInButton provider="facebook" />
          <SocialSignInButton provider="google" />
          <SocialSignInButton provider="twitter" />
        </div>
        <div className="my-4">
          <FormSeparator text="or" />
        </div>
        <div>
          <LoginForm />
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
