"use client";
import { AnimatePresence } from "framer-motion";
import NavBar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Transition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const transitionVariants = {
    animte: {
      x: "0%",
      width: "0%",
    },
    exit: {},
  };
  return (
    <AnimatePresence mode="wait">
      <main
        key={pathname}
        className="bg-gradient-to-r from-blue to-blue/90 h-screen w-screen text-white overflow-hidden"
      >
        <motion.div
          className="top-0 bottom-0 right-full fixed z-30 bg-red w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className="top-0 bottom-0 right-full fixed z-30 bg-blue w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className="top-0 bottom-0 right-0 left-0 m-auto  fixed z-40 w-fit h-fit text-white text-5xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathname === "/" ? "HOME" : "" || pathname.toUpperCase().substring(1)}
        </motion.div>
        <motion.div
          className="top-0 bottom-0 right-full fixed z-30 bg-blue w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          initial={{ x: "100%", width: "100%" }}
          transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          className="top-0 bottom-0 right-full fixed z-20 bg-red w-screen h-screen "
          animate={{ x: "0%", width: "0%" }}
          initial={{ x: "100%", width: "100%" }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
        />
          <NavBar />
          {children}
      </main>
    </AnimatePresence>
  );
};

export default Transition;
