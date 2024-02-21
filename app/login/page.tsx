import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button>login with google</button>
      </form>
    </div>
  );
}
