import Link from "next/link";
import Image from "next/image";

export default function header() {
  return (
    <header className="flex flex-row items-center justify-between max-w-7xl mx-auto px-2 py-9">
      <Link href={"/"}>
        <Image
          src="/favicon.svg"
          alt="SpiderMonk"
          width={50}
          height={50}
          className="h-12"
        />
      </Link>
      <p className="text-xl">ME-NU</p>
    </header>
  );
}
