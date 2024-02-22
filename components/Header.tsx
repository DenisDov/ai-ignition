import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 flex justify-center items-center bg-white">
      <Link href="/" className="text-3xl">
        AI Ignition
      </Link>
    </div>
  );
};

export { Header };
