"use client";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "./magnetic";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./nav";
import { cn } from "@/lib/utils";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="flex flex-row items-center justify-between max-w-7xl mx-auto px-10 py-9 relative z-10 min-h-14">
      <Link href={"/"}>
        <Image
          src="/favicon.svg"
          alt="SpiderMonk"
          width={50}
          height={50}
          className="h-12 opacity-0"
        />
      </Link>
      <AnimatePresence mode="wait">
        {!menu && (
          <Magnetic>
            <p
              id="me-nu"
              className={cn("text-xl p-5 zoom-button z-10 text-foreground")}
              onClick={() => setMenu((m) => !m)}
            >
              ME-NU
            </p>
          </Magnetic>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {menu && (
          <>
            <Nav />
            <motion.div
              className="fixed top-0 right-0 backdrop-blur-sm blur-sm h-full w-full"
              onClick={() => setMenu((m) => !m)}
            />
          </>
        )}
      </AnimatePresence>
      {menu && (
        <Magnetic>
          <p
            id="me-nu"
            className={cn(
              "text-xl p-5 zoom-button z-[1000] text-background fixed right-10",
              !menu && "hidden"
            )}
            onClick={() => setMenu((m) => !m)}
          >
            CLOSE
          </p>
        </Magnetic>
      )}
    </header>
  );
}
