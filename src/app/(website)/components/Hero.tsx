"use client";
import Image from "next/image";
import Magnetic from "../magnetic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  useGSAP(() => {
    const text = new SplitType("#hero-description", { split: "words" });
    gsap.fromTo(
      text.words,
      { y: 110, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "back.inOut(1.7)",
      }
    );
  });
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center  min-h-[calc(100vh-20rem)] text-center space-y-4"
    >
      <Magnetic>
        <Image
          src="/favicon.svg"
          alt="spiddy"
          width={50}
          height={50}
          className="h-16"
        />
      </Magnetic>
      <div className="h-12" />
      <h1 className="text-2xl font-cover-by-your-grace">Gaurav Kumar Sharma</h1>
      <h2
        className="text-[5rem] lg:text-[6.5rem] leading-[80%] child-gradient [&>span>div]:text-gradient transition-all duration-75 ease-out [&>div>div]:clip-title [&>*]:clip-title [&>div>span>div>div]:opacity-0"
        id="hero-description"
      >
        Full Stack <br />
        <span>SoftWare</span> <br />
        <span>Engineer</span> <br />
        Since <br />
        <span>2023</span>
      </h2>
    </section>
  );
}
