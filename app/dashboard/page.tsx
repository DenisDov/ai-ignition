import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export default async function DashboardPage() {
  const { rows } = await sql`SELECT * from USERS`;
  console.log("rows: ", rows);

  return (
    <div className="m-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="min-h-80">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/tTGWfXPKxf4?si=iDcqQbgJybcBxVhv"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#DBB898] to-[#9DC1CE] min-h-80 rounded-xl no-underline flex items-center justify-center cursor-pointer">
            <label className="grid gap-1 place-items-center">
              <input type="file" hidden />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="94"
                fill="none"
              >
                <path
                  stroke="#343537"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.292"
                  d="m28.594 56.813 1.432-24.366a5.156 5.156 0 0 1 5.15-4.853h24.649a5.156 5.156 0 0 1 5.149 4.853l1.432 24.365M47.5 49.938v-15.47m0 0 6.875 6.876M47.5 34.469l-6.875 6.875m26.64 15.468h-39.53a2.58 2.58 0 0 0-2.579 2.579v3.437a2.58 2.58 0 0 0 2.578 2.578h39.532a2.58 2.58 0 0 0 2.578-2.578v-3.437a2.58 2.58 0 0 0-2.578-2.578Z"
                />
                <circle
                  cx="47"
                  cy="47"
                  r="46"
                  stroke="#343537"
                  stroke-width="2"
                />
              </svg>
              <span className="text-2xl font-serif">Upload CV</span>
              <span>( PDF or DOCX )</span>
            </label>
          </div>
        </div>
        <div>
          <div className="min-h-80">03</div>
        </div>
        <div>
          <Link
            className="bg-gradient-to-r from-[#C5DCE4] to-[#DBB898] min-h-80 rounded-xl no-underline flex items-center justify-center"
            href="/dashboard/about"
          >
            <span className="font-serif text-4xl">Create CV with AI</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
