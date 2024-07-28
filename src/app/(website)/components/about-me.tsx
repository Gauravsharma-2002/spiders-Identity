export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="flex flex-col justify-center min-h-svh space-y-4 max-w-4xl px-10 mx-auto"
    >
      <h3 className="text-2xl trackin-[0.6rem]">About Me</h3>
      <p className=" text-6xl child-gradient ">
        I&apos;m a software engineer with strong focus on{" "}
        <span>Software Interface</span> & <span>Digital Experience</span>
        {/* &{" "} */}
        {/* <span> customer Satisfaction </span> */}
      </p>
    </section>
  );
}
