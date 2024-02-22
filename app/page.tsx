import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid gap-10 bg-white p-6 my-12 rounded-xl">
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
