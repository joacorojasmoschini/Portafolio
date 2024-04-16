"use client";
import Brain from "@/components/Brain";
import Skills from "@/components/Skills";
import { motion, useScroll, useInView } from "framer-motion";
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
  SiTrello,
} from "react-icons/si";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa6";
import React, { useRef } from "react";
import Education from "@/components/Education";

const About = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const skillTitleRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const isSkillInView = useInView(skillRef);
  const isSkillTitleInView = useInView(skillTitleRef);

  const skillsData = [
    {
      title: "Back-end",
      data: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiMongoose />, name: "Mongoose" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiJsonwebtokens />, name: "JSON Web Token" },
        { icon: <SiPassport />, name: "Passport.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
      ],
    },
    {
      title: "Front-end",
      data: [
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiCss3 />, name: "CSS3" },
        { icon: <SiHtml5 />, name: "HTML5" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiReact />, name: "React" },
        { icon: <TbBrandNextjs />, name: "Next.js" },
        { icon: <SiFramer />, name: "Framer" },
      ],
    },
    {
      title: "Herramientas",
      data: [
        { icon: <SiFigma />, name: "Figma" },
        { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
        { icon: <SiAmazonaws />, name: "Amazon Web Services (AWS)" },
        { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiTrello />, name: "Trello" },
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
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 xl:pt-36 flex flex-col lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-3xl">
              ACERCA DE MI <span className="text-light-red">.</span>
            </h1>
            <p>
              Actualmente vivo en CABA, Argentina. Me incursione en el mundo de
              la programación en 2021. Desde chico fui un apasionado de la
              tecnología y de a poco me fui metiendo en el mundo IT, comencé con
              el lenguaje de programación Java, asistiendo a un curso del mismo
              en la UTN, luego me adentre en el desarrollo web con el lenguaje
              de JavaScript. Actualmente me encuentro cursando la carrera de
              ingenieria en sistemas.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="hidden pt-16 lg:flex flex-row items-center"
          >
            <span className="mr-1">SKILLS</span>
            <div>
              <MdKeyboardDoubleArrowDown className="text-4xl text-light-red" />
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 right-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <div className="p-4 sm:p-8 md:p-12 lg:px-20 xl:px-48 xl:pt-8 flex flex-col gap-12">
        <motion.h3
          ref={skillTitleRef}
          initial={{ x: -300 }}
          animate={isSkillTitleInView ? { x: 0 } : {}}
          className="font-bold text-2xl"
        >
          SKILLS<span className="text-light-red">.</span>
        </motion.h3>
        <div
          ref={skillRef}
          className="flex flex-col sm:flex-row sm:justify-between gap-4 md:gap-8"
        >
          {skillsData.map((skill, index) => (
            <React.Fragment key={index}>
              <Skills
                title={skill.title}
                skill={skill.data}
                isSkillInView={isSkillInView}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="p-4 sm:p-8 md:p-12 lg:px-20 xl:px-48 xl:pt-8 flex flex-col gap-12">
        <h3 className="font-bold text-2xl">
          EDUCACIÓN <span className="text-light-red">.</span>
        </h3>
        <Education />
      </div>
    </motion.div>
  );
};

export default About;
