"use client";
import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div className="lg:flex">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-3xl">
              ACERCA DE MI <span className="text-light-red">.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur repellendus possimus natus totam! Quod eveniet minima
              incidunt, nam dolorum dolorem ex neque nulla accusamus ipsam
              porro. Ea eum id dolorem!
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 right-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <div className="max-w-screen-xl flex justify-center">
        <h3 className="text-center">
          SKILLS<span className="text-light-red text-3xl">.</span>
        </h3>
      </div>
    </motion.div>
  );
};

export default About;
