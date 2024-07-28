import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="flex flex-col item-center justify-between max-w-4xl mx-auto px-10 py-9 pb-44"
      >
        <h3 className="text-2xl tracking-[0.6rem] w-full mb-15 child-gradient">
          Let&apos;s <span className="text-4xl">Connect</span>
        </h3>
        <div className="grid grid-col-6 gap-4 w-full mx-auto">
          <div className="flex flex-col col-span-6 md:col-span-1 text-3xl gap-4">
            <Link href="#">LinkedIN</Link>
            <Link href="#">X</Link>
          </div>
          <div className="flex flex-col text-3xl gap-4 col-span-6 md:col-span-1">
            <Link href={"#"}>GitHub</Link>
            <Link href={"#"}>Instagram</Link>
          </div>
          {/* seprator */}
          <div className="hidden md:inline md:col-span-2" />
          {/* seprator */}
          <div className="col-span-6 md:col-span-2 flex flex-col text-3xl gap-4 md:item-end">
            <div className="flex flex-col gap-3">
              <Link className="flex flex-col " href={"#"}>
                <span className="text-lg">Email</span>
                <span className="text-base">2140113@sliet.ac.in</span>
              </Link>
              <Link className="flex flex-col" href={"#"}>
                <span className="text-lg">Phone</span>
                <span className="text-base">+91 8920681592</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
