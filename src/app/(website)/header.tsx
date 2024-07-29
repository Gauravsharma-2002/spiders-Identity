"use client";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "./magnetic";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="flex flex-row items-center justify-between max-w-7xl mx-auto px-10 py-9">
      <Link href={"/"}>
        <Image
          src="/favicon.svg"
          alt="SpiderMonk"
          width={50}
          height={50}
          className="h-12 opacity-0"
        />
      </Link>
      <Magnetic>
        <p
          className="text-xl p-5 zoom-button z-[100]"

          // onClick={() => setMenu((menu) => !menu)}
        >
          {/* ME-NU */}
          {menu ? "CLOSE" : "ME-NU"}
        </p>
      </Magnetic>
      <AnimatePresence mode="wait">{menu && <Nav />}</AnimatePresence>
    </header>
  );
}
