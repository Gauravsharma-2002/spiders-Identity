"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Cursor() {
  useGSAP(() => {
    const isTouched = "ontouchstart" in window;
    const createCursorFollower = () => {
      document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        gsap.set(".cursor", {
          x: x + 3,
          y: y + 3,
          height: 80,
          width: 80,
          duration: 0.7,
          opacity: 1,
          ease: "sine.inOut(1,0.3)",
        });
      });
    };
    // making cursor hide when it is out of the page
    document.addEventListener("mouseleave", () => {
      gsap.set(".cursor", {
        duration: 0.7,
        height: 0,
        width: 0,
        ease: "sine.inOut(1,0.3)",
        xPercent: -50,
        yPercent: -50,
      });
    });
    // function must only be invoked when device is not touched
    if (!isTouched) {
      createCursorFollower();
    }
  }, []);
  return (
    <div className="cursor fixed top-0 left-0 mix-blend-difference bg-slate-300 opacity-0 pointer-events-none select-none rounded-full z-[10000]" />
  );
}
