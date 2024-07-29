"use client";
import Link from "next/link";
import Magnetic from "./magnetic";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="flex flex-col item-center justify-between max-w-4xl mx-auto px-10 py-9 pb-44 z-10"
      >
        <h3 className="text-2xl tracking-[0.6rem] w-full mb-15 child-gradient">
          Let&apos;s <span className="text-4xl">Connect</span>
        </h3>
        <div className="grid grid-col-6 gap-4 w-full mx-auto">
          <div className="flex flex-col col-span-6 md:col-span-1 text-3xl gap-4">
            <Magnetic>
              <Link
                target="_blank"
                href="#"
                className="underline underline-offset-4"
              >
                LinkedIn
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                target="_blank"
                href="#"
                className="underline underline-offset-4"
              >
                Github
              </Link>
            </Magnetic>
          </div>
          <div className="flex flex-col text-3xl gap-4 col-span-6 md:col-span-1">
            <Magnetic>
              <Link
                target="_blank"
                href="#"
                className="underline underline-offset-4"
              >
                Dribbble
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                target="_blank"
                href="#"
                className="underline underline-offset-4"
              >
                Instagram
              </Link>
            </Magnetic>
          </div>
          {/* seprator */}
          <div className="hidden md:inline md:col-span-2" />
          {/* seprator */}
          <div className="col-span-6 md:col-span-2 flex flex-col text-3xl gap-4 md:item-end">
            <div className="flex flex-col gap-3 mt-9 md:mt-0">
              <Link className="flex flex-col " target="blank" href={"#"}>
                <span className="text-lg">Email</span>
                <Magnetic>
                  <span className="text-base">2140113@sliet.ac.in</span>
                </Magnetic>
              </Link>
              <Link className="flex flex-col" target="blank" href={"#"}>
                <span className="text-lg">Phone</span>
                <Magnetic>
                  <span className="text-base">+91 8920681592</span>
                </Magnetic>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
