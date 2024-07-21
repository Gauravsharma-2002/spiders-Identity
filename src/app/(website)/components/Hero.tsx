import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center  min-h-[calc(100vh-20rem)] text-center space-y-4"
    >
      <Image
        src="/favicon.svg"
        alt="spiddy"
        width={50}
        height={50}
        className="h-16"
      />
      <div className="h-12" />
      <h1 className="text-2xl font-cover-by-your-grace">Gaurav Kumar Sharma</h1>
      <h2 className="text-[5rem] lg:text-[6.5rem] leading-[80%] [&>span]:text-gradient transition-all duration-75 ease-out">
        Full Stack <br />
        <span>SoftWare</span> <br />
        <span>Engineer</span> <br />
        Since <br />
        <span>2023</span>
      </h2>
    </section>
  );
}
