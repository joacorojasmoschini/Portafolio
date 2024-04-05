"use client";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div>Work page</div>
    </motion.div>
  );
};

export default Work;
