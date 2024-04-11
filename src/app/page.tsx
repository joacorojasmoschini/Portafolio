"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiEnvelopeOpen, HiRectangleGroup, HiUser } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa6";

const Home = () => {
  const pathData = [
    {
      name: "About",
      path: "/about",
      icon: <HiUser />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <HiRectangleGroup />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <HiEnvelopeOpen />,
    },
  ];

  return (
    <motion.div
      className="w-screen"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div className="w-full flex max-w-screen-lg mx-auto ">
        <div className="mx-auto">
          <div className="text-center flex flex-col h-full justify-center lg:text-left container">
            <h4 className="text-white/80">FULL STACK DEVELOPER</h4>
            <h1 className="text-3xl mb-6">
              TRANSFORAMANDO IDEAS <br />
              EN <span className="text-light-red"> EXPERIENCIAS DIGITALES</span>
            </h1>
            <p className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 text-white/70">
              Bienvenidos a mi portafolio, mi nombre es
              <span className="text-light-red font-semibold"> Joaquín</span>.
              Soy un{" "}
              <span className="text-light-red font-semibold">
                desarrollador full stack
              </span>{" "}
              con experiencia en la creación de{" "}
              <span className="text-light-red font-semibold">
                aplicaciones web
              </span>
              . Me apasiona{" "}
              <span className="text-light-red font-semibold">
                transformar ideas
              </span>{" "}
              en experiencias digitales. Estoy constantemente aprendiendo y
              explorando nuevas tecnologías para mejorar mis habilidades y
              ofrecer productos de{" "}
              <span className="text-light-red font-semibold">
                {" "}
                alta calidad
              </span>{" "}
              a mis clientes.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            <div className="flex gap-4 justify-center items-center">
              {pathData.map((data, index) => (
                <Link
                  href={data.path}
                  key={index}
                  className="flex bg-light-blue/10 p-4 gap-x-2 rounded-sm items-center justify-center hover:bg-light-blue/50 duration-200"
                >
                  <div className="text-light-red">{data.icon}</div>
                  <div>{data.name}</div>
                </Link>
              ))}
            </div>
            <a
              href="/FULL STACK DEVELOPER - ROJAS MOSCHINI.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-red/90 text-blue gap-x-2 justify-center items-center p-4 hover:bg-light-red/80 duration-200 w-1/2"
            >
              <div className="text-blue">
                <FaDownload />
              </div>
              <div className="text-white">Descargar CV</div>
            </a>
          </div>
        </div>
        <div className="mx-auto hidden md:flex md:items-center md:justify-start">
          <Image
            style={{ maskImage: "linear-gradient(black 80%, transparent)" }}
            src="/caricatura.png"
            width={300}
            height={300}
            alt="caricatura"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
