import { auth } from "@/auth";
import Link from "next/link";

import { UserNav } from "./user-nav";

const Header = async () => {
  let session = await auth();
  let user: any = session?.user;
  return (
    <div className="flex h-20 items-center justify-center bg-white">
      <Link href="/" className="font-sans text-3xl no-underline">
        AI Ignition
      </Link>
      {user && (
        <div className="absolute right-4">
          <UserNav user={user} />
        </div>
      )}
    </div>
  );
};

export { Header };
