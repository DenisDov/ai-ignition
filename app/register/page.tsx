import { signIn } from "@/auth";

export default function RegisterPage() {
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
