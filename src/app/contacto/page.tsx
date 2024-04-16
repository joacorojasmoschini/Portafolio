"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulario enviado con éxito");
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      className="w-full"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <div className="mx-auto py-20 md:py-32 text-center flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-screen-md">
          <h2 className="text-3xl mb-12 font-bold">
            CONTACTAME <span className="text-light-red">.</span>
          </h2>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col gap-6 w-full px-2 mx-auto"
          >
            <div className="flex gap-x-5 w-full">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border rounded-sm p-2 w-1/2 focus:border-light-red focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border rounded-sm p-2 w-1/2 focus:border-light-red focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              className="bg-transparent border rounded-sm p-2 w-full focus:border-light-red focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border rounded-sm p-2 w-full focus:border-light-red focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="rounded-full border border-slate-600 max-w-[170px] px-8 py-1 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-light-red group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Hablemos
              </span>
              <MdKeyboardDoubleArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-2xl" />
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
