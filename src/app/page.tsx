"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <motion.div
      className="w-full h-full flex max-w-screen-lg mx-auto"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div className="h-full max-w-screen-lg mx-auto">
        <div className="text-center flex flex-col h-full justify-center lg:text-left mx-auto container">
          <h4 className="text-white/80">FULL STACK DEVELOPER</h4>
          <h1 className="text-3xl mb-6">
            TRANSFORAMANDO IDEAS <br />
            EN <span className="text-light-red"> EXPERIENCIAS DIGITALES</span>
          </h1>
          <p className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 text-white/70">
            Bienvenidos a mi portafolio, mi nombre es{" "}
            <span className="text-light-red font-semibold">Joaquín</span>. Soy un
            desarrollador full stack con experiencia en la creación de
            aplicaciones web. Me apasiona transformar ideas en experiencias
            digitales. Estoy constantemente aprendiendo y
            explorando nuevas tecnologías para mejorar mis habilidades y ofrecer
            productos de alta calidad a mis clientes.
          </p>
        </div>
      </div>
      <div className="mx-auto hidden lg:flex lg:items-center lg:justify-start">
        <Image style={{maskImage: "linear-gradient(black 80%, transparent)"}} src="/caricatura.png" width={300} height={300} alt="caricatura"/>
      </div>
    </motion.div>
  );
};
export default Home;
