"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineDevices } from "react-icons/md";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Card({
  title,
  skills,
  image,
  deploy,
  description,
  repository,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="max-w-[42rem] border border-none rounded-lg overflow-hidden sm:pr-8 relative h-full hover:bg-gray-200 transition sm:group-even:pl-8 text-white bg-gradient-to-br from-light-blue/20 via-light-blue/10 to-red/40 hover:bg-light-blue/10 drop-shadow-md">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {skills.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-3xl pt-4">
            <Link href={repository}>
              <FaGithub className="hover:text-light-red cursor-pointer duration-500" />
            </Link>
            <Link href={deploy}>
              <MdOutlineDevices className="hover:text-light-red cursor-pointer duration-500" />
            </Link>
          </div>
        </div>

        <Image
          src={image}
          alt="Project I worked on"
          quality={95}
          width={1000}
          height={400}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
