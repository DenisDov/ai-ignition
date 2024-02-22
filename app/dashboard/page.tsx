import { sql } from "@vercel/postgres";

export default async function DashboardPage() {
  const { rows } = await sql`SELECT * from USERS`;
  console.log("rows: ", rows);

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">DashboardPage</h1>
      <p>This page is protected</p>
    </div>
  );
}
