import { signIn } from "@/auth";
import SocialSignInButton from "@/components/SocialSignInButton";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  return (
    <div className="bg-white flex gap-20 my-12 rounded-xl">
      <div className="p-6 flex-1">
        <h2>Create an account</h2>
        <p>
          Already have an account? <Link href="/login">Log in</Link>
        </p>

        <div className="grid gap-3">
          <SocialSignInButton provider="facebook" />
          <SocialSignInButton provider="google" />
          <SocialSignInButton provider="twitter" />
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
