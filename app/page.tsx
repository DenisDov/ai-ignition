import { signIn } from "@/auth";
import SocialSignInButton from "@/components/SocialSignInButton";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div>
      <h2>Create an account</h2>
      <p>
        Already have an account? <Link href="/login">Log in</Link>
      </p>

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
