"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="w-full h-screen"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div>Contact page</div>
    </motion.div>
  );
};

export default Contact;
