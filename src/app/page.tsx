"use client";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <h1 className="text-8xl">FULL STACK DEVELOPER</h1>
    </motion.div>
  );
};
export default Home;
