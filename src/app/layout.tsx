import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Transition from "@/components/Transition";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joaquín Rojas Moschini",
  description: "Joaquín Rojas Moschini portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
