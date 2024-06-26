"use client";
import { AnimatePresence } from "framer-motion";
import NavBar from "./Navbar";
import Header from "./Header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Transition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <main
        key={pathname}
        className="bg-gradient-to-r from-blue to-blue/90 min-h-screen text-white overflow-hidden"
      >
        <motion.div
          className="top-0 bottom-0 right-full fixed z-40 bg-red w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className="top-0 bottom-0 right-full fixed z-40 bg-blue w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className="top-0 bottom-0 right-0 left-0 m-auto  fixed z-50 w-fit h-fit text-white text-center text-5xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathname.toUpperCase().substring(1).replace(/-/g, ' ')}
        </motion.div>
        <motion.div
          className="top-0 bottom-0 right-full fixed z-40 bg-blue w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          initial={{ x: "100%", width: "100%" }}
          transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          className="top-0 bottom-0 right-full fixed z-30 bg-red w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          initial={{ x: "100%", width: "100%" }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
        />
          <Header />
          <NavBar />
          {children}
      </main>
    </AnimatePresence>
  );
};

export default Transition;
