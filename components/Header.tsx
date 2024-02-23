import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      className="flex items-center gap-2 absolute right-4"
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
    <div className="h-20 flex justify-center items-center bg-white">
      <Link href="/" className="text-3xl no-underline font-sans">
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
