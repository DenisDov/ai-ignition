import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      className="absolute right-4 flex items-center gap-2"
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      {children}
      <div>
        <Button type="submit">Sign Out</Button>
      </div>
    </form>
  );
}

const Header = async () => {
  let session = await auth();
  let user = session?.user;
  return (
    <div className="flex h-20 items-center justify-center bg-white">
      <Link href="/" className="font-sans text-3xl no-underline">
        AI Ignition
      </Link>
      {user && (
        <SignOut>
          <p>{user?.name || user.email}</p>
          <Avatar>
            <AvatarImage src={user?.image!} />
            <AvatarFallback>{getInitials(user?.name! || "O")}</AvatarFallback>
          </Avatar>
        </SignOut>
      )}
    </div>
  );
};

export { Header };
