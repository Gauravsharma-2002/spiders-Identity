import { cn } from "@/lib/utils";
import StringLine from "./string-line";
import { motion } from "framer-motion";
import FadeOnScroll from "../fade.on.scrool";
export default function Clients() {
  const clients = ["A Ltd", "B Corp", "C Entrp"];
  return (
    <>
      <section
        id="clients"
        className="flex flex-col justify-center my-[20vh] space-y-4 max-w-4xl px-10 mx-auto"
      >
        <FadeOnScroll>
          <motion.div className="space-y-4">
            <h3 className="text-2xl tracking-[0.6rem]">Clients</h3>
            <p className="text-6xl child-gradient">
              I worked with some <span> Innovative </span> agencies and also
              some <span>Amazing</span> clients Independently to build there{" "}
              <span> top notch products</span>
            </p>
          </motion.div>
        </FadeOnScroll>
      </section>
      <section className="mb-[20vh]">
        {/* <hr className="border-slate-700" /> */}
        <StringLine />
        {clients.map((item, ind) => (
          <div
            key={ind}
            // className={cn("hover:bg-gradient-logo hover:text-background pt-4")}
            className={cn()}
          >
            <p className="text-6xl leading-[80%] w-full max-w-4xl px-10 mb-5 mx-auto">
              {item}
            </p>
            {/* <hr className="border-slate-700" /> */}
            <StringLine />
          </div>
        ))}
      </section>
    </>
  );
}
