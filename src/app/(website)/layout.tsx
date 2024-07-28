import { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";

import Cursor from "./cursor";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
export const metaData: Metadata = {
  title: " Gaurav K Sharma - portfolio",
  description: "FullStack Software Engineer from  Delhi-INDIA",
  icons: ["favicon.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(bebas.className, "cursor-none")}>
        <Header />
        {children}
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
