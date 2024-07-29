"use client";
import Hero from "./components/Hero";
import AboutMe from "./components/about-me";
import Clients from "./components/clients";
import Experience from "./components/experience";
import History from "./components/history";
import ThingsIDo from "./components/things-i-do";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import LinesSVG from "./Line.svg";

export default function Home() {
  const lenisRef = useRef<Lenis | undefined>(undefined);
  const refHandleRef = useRef<number | null>(null);
  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();
      const ref = (time: number) => {
        lenisRef.current?.raf(time);
        refHandleRef.current = requestAnimationFrame(ref);
      };
      refHandleRef.current = requestAnimationFrame(ref);
    }

    /// this has to be clened
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (refHandleRef.current) {
        cancelAnimationFrame(refHandleRef.current);
        refHandleRef.current = null;
      }
    };
  }, []);
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
        <ThingsIDo />
        <Experience />
        <History />
        <Clients />
      </main>
      <LinesSVG />
    </>
  );
}
