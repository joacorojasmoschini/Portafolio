"use client";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollToRef = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="w-full"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div className="max-w-screen-lg mx-auto py-16">
        <div className="text-center">
          <h1 className="text-3xl text-white pb-6 font-bold">PROYECTOS <span className="text-light-red">.</span></h1>
          <p className="max-w-sm mx-auto">
            Te invito a que eches un vistazo a mis proyectos realizados. Vas a
            encontrar trabajos Front-end, Back-end y Full-Stack.
          </p>
          <MdKeyboardDoubleArrowDown
            onClick={scrollToRef}
            className="text-5xl text-red mx-auto my-16 cursor-pointer"
          />
        </div>
        <div
          ref={ref}
          className="overflow-y flex flex-col justify-center items-center"
        >
          {projectsData.map((project, index) => {
            return (
              <React.Fragment key={project.id + index}>
                <Card {...project} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
