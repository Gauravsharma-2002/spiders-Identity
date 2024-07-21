import { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "./header";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
export const metaData: Metadata = {
  title: " Gaurav K Sharma - portfolio",
  description: "FullStack Software Engineer based in Delhi-INDIA",
  icons: ["favicon.svg"],
};  

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(bebas.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
