import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";
import VideoComponent from "@/components/video";

export default async function DashboardPage() {
  // const { rows } = await sql`SELECT * from USERS`;
  // console.log("rows: ", rows);

  return (
    <div className="m-10">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <VideoComponent id="tTGWfXPKxf4?si=iDcqQbgJybcBxVhv" />
        </div>

        <label className="flex flex-col items-center justify-center gap-1  rounded-xl bg-gradient-to-r   from-[#DBB898] to-[#9DC1CE]">
          <input type="file" hidden />
          <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" fill="none">
            <path
              stroke="#343537"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.292"
              d="m28.594 56.813 1.432-24.366a5.156 5.156 0 0 1 5.15-4.853h24.649a5.156 5.156 0 0 1 5.149 4.853l1.432 24.365M47.5 49.938v-15.47m0 0 6.875 6.876M47.5 34.469l-6.875 6.875m26.64 15.468h-39.53a2.58 2.58 0 0 0-2.579 2.579v3.437a2.58 2.58 0 0 0 2.578 2.578h39.532a2.58 2.58 0 0 0 2.578-2.578v-3.437a2.58 2.58 0 0 0-2.578-2.578Z"
            />
            <circle cx="47" cy="47" r="46" stroke="#343537" strokeWidth="2" />
          </svg>
          <span className="font-serif text-2xl">Upload CV</span>
          <span>( PDF or DOCX )</span>
        </label>

        <div className="rounded-xl bg-white">
          <Carousel />
        </div>

        <Link
          className="flex items-center justify-center  rounded-xl bg-gradient-to-r from-[#C5DCE4] to-[#DBB898] no-underline"
          href="/dashboard/about">
          <span className="font-serif text-4xl">Create CV with AI</span>
        </Link>
      </div>
    </div>
  );
}
