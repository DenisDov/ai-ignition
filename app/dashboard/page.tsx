import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";
import VideoComponent from "@/components/video";
import { FileInput } from "@/components/fileInput";

export default async function DashboardPage() {
  // const { rows } = await sql`SELECT * from USERS`;
  // console.log("rows: ", rows);

  return (
    <div className="m-10">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <VideoComponent id="tTGWfXPKxf4?si=iDcqQbgJybcBxVhv" />
        </div>

        <FileInput />

        <div className="overflow-hidden rounded-xl bg-white p-4">
          <Carousel />
        </div>

        <Link
          className="flex items-center justify-center rounded-xl  bg-gradient-to-r from-[#C5DCE4] to-[#DBB898] p-4 no-underline"
          href="/dashboard/profile">
          <span className="font-serif text-4xl">Create CV with AI</span>
        </Link>
      </div>
    </div>
  );
}
