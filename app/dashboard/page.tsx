import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { sql } from "@vercel/postgres";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
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

export default async function DashboardPage() {
  let session = await auth();
  let user = session?.user;

  const { rows } = await sql`SELECT * from PLAYERS`;
  // console.log("rows: ", rows);

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">DashboardPage</h1>
      <p>This page is protected</p>

      {user && (
        <div>
          <SignOut>
            <p>{`Welcome ${user?.name}`}</p>
            <p>{user?.email}</p>
            <Avatar>
              <AvatarImage src={user?.image!} />
              <AvatarFallback>{getInitials(user?.name!)}</AvatarFallback>
            </Avatar>
          </SignOut>
        </div>
      )}
    </div>
  );
}
