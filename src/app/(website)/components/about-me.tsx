"use client";
import { motion } from "framer-motion";
import FadeOnScroll from "../fade.on.scrool";
export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="flex flex-col justify-center min-h-svh space-y-4 max-w-4xl px-10 mx-auto"
    >
      <FadeOnScroll>
        <motion.div className="space-y-4">
          <h3 className="text-2xl trackin-[0.6rem] box ">About Me</h3>
          <p className=" text-4xl sm:text-6xl child-gradient  box">
            I&apos;m a software engineer with strong focus on{" "}
            <span>Software Interface</span> & <span>Digital Experience</span>
            {/* &{" "} */}
            {/* <span> customer Satisfaction </span> */}
          </p>
        </motion.div>
      </FadeOnScroll>
    </section>
  );
}
