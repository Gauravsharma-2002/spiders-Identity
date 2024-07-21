export default function History() {
  const history = [
    {
      title: "Junior Frontend Developer",
      company: "KodderBox Technologies",
      date: "june 2023",
    },
  ];
  return (
    <>
      <section id="history" className="flex flex-col justify-center min-h-svh">
        <h3 className="w-full text-2xl  tracking-[0.6rem] max-w-4xl px-10 mx-auto mb-4">
          History
        </h3>
        <hr className="border-slate-700" />
        {history.map((item, ind) => {
          return (
            <div key={ind} className="pt-5">
              <div className="grid grid-cols-7 md:gap-8 text-5xl max-w-4xl mx-auto px-10">
                <p className="col-span-7 md:col-span-3 text-3xl md:text-4xl">
                  {item.date}
                </p>
                <p className="col-span-7 md:col-span-4 md:leading-8">
                  {item.title}
                  <br />
                  <span className="text-gradient text-2xl font-semibold tracking-widest">
                    {item.company}
                  </span>
                </p>
              </div>
              <hr className="border-slate-700" />
            </div>
          );
        })}
      </section>
    </>
  );
}
