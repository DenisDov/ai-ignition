import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * from PLAYERS`;
  console.log("rows: ", rows);
  return <div className="flex items-center justify-between">test</div>;
}
