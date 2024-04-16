import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Transition from "@/components/Transition";

const inter = Montserrat({ subsets: ["latin"] , weight: "500"});

export const metadata: Metadata = {
  title: "Joaquin R. Moschini",
  description: "Joaquín Rojas Moschini | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className }>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
