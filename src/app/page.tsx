"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
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
