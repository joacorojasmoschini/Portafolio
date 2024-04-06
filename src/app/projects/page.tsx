"use client";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { projectsData } from "@/lib/data";
import React from "react";

const Work = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div className="max-w-screen-lg mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl text-light-red">PROJECTS</h2>
          <p className="max-w-sm mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            commodi dolor, dolorum dicta quam ea consectetur aut atque numquam,
            ipsum, harum impedit exercitationem deserunt cumque praesentium
            mollitia incidunt quod iure.
          </p>
        </div>
        <div className="overflow-y flex flex-col justify-center items-center">
          {projectsData.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <Card {...project}/>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
