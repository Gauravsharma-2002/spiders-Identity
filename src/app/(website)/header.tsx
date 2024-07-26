"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  const isTouch = "ontouchstart" in window;
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  useGSAP(() => {
    const { x, y } = cursorPos;
    console.log(cursorPos);
    if (x !== 0 && y !== 0) {
      gsap.set("#me-nu", {
        duration: 0.7,
        scale: 1.3,
        ease: "sine.inOut",
        transition: "all 0.3s ease-in-out",
      });
    } else {
      gsap.set("#me-nu", {
        duration: 0.7,
        scale: 1,
        ease: "sine.inOut",
        transition: " all 0.3s ease-in-out",
        x: 0,
        y: 0,
      });
    }
  }, [cursorPos]);

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
      {/* <p className="text-xl">ME-NU</p> */}
      <p
        // className="text-xl"
        // onMouseEnter={() => {
        //   console.log("Me_NU");
        // }}
        id="me-nu"
        className=" text-xl p-5"
        onMouseEnter={(e) => {
          setCursorPos((ocp) => ({
            x: e.pageX - ocp.x,
            y: e.pageY - ocp.y,
          }));
        }}
        onMouseLeave={() => {
          setCursorPos({ x: 0, y: 0 });
        }}
      >
        ME-NU
      </p>
    </header>
  );
}
