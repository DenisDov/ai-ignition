import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="my-12 grid gap-10 rounded-xl bg-white p-6">
      <h1>LANDING PAGE</h1>
      <div className="flex gap-2">
        <Button asChild>
          <Link href="/register">Register</Link>
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
