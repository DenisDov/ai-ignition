import { signIn } from "@/auth";

export default async function HomePage() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">login with google</button>
      </form>
    </div>
  );
}
