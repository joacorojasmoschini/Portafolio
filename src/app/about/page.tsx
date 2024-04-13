"use client";
import Brain from "@/components/Brain";
import Skills from "@/components/Skills";
import { motion, useScroll } from "framer-motion";
import {
  SiMongoose,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiJsonwebtokens,
  SiPassport,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiVisualstudiocode,
  SiAmazonaws,
  SiAdobephotoshop,
  SiReact,
  SiFramer,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa6";
import { useRef } from "react";
import React from "react";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillsData = [
    {
      title: "Back-end",
      data: [
        <SiMongodb />,
        <SiExpress />,
        <SiMongoose />,
        <SiPostgresql />,
        <SiJsonwebtokens />,
        <SiPassport />,
        <FaNodeJs />,
      ],
    },
    {
      title: "Front-end",
      data: [
        <SiTailwindcss />,
        <SiTypescript />,
        <SiCss3 />,
        <SiPostgresql />,
        <SiHtml5 />,
        <SiJavascript />,
        <SiReact />,
        <TbBrandNextjs />,
        <SiFramer />,
      ],
    },
    {
      title: "Herramientas",
      data: [
        <SiFigma />,
        <SiVisualstudiocode />,
        <SiAmazonaws />,
        <SiAdobephotoshop />,
        <FaGitAlt />,
        <FaGithub />,
      ],
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div className="lg:flex xl:h-screen">
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
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 xl:pt-8 flex flex-col gap-12">
        <h3 className="font-bold text-3xl">
          SKILLS<span className="text-light-red">.</span>
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 md:gap-8">
          {skillsData.map((skill, index) => (
            <React.Fragment key={index}>
              <Skills title={skill.title} icons={skill.data} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
