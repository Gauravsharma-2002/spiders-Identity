import { cn } from "@/lib/utils";
import FadeOnScroll from "../fade.on.scrool";

import { motion } from "framer-motion";
import StringLine from "./string-line";
export default function ThingsIDo() {
  const thingsIDo = ["FrontEnd", "BackEnd", "UserInterFace"];
  return (
    <section id="thingsIDo" className="flex flex-col justify-center min-h-svh">
      <FadeOnScroll>
        <motion.div className="w-full text-2xl tracking-[0.6rem] max-w-4xl px-10 mx-auto mb-7">
          <h3 className="width-full text-2xl tracking-[0.4rem] max-w-4xl px-10 mx-auto mb-7">
            Things i Do
          </h3>
        </motion.div>
      </FadeOnScroll>
      {/* <hr className="border-slate-700" /> */}
      <StringLine />
      {thingsIDo.map((item, ind) => (
        <div
          key={ind}
          className="cn(hover:bg-gradient-logo hover:text-background pt-4)"
        >
          <p className=" text-4xl sm:text-6xl leading-[80%] w-full mx-auto max-w-4xl px-10  mb-2">
            {item}
          </p>
          {/* <hr className="border-slate-700" /> */}
          <StringLine />
        </div>
      ))}
    </section>
  );
}
