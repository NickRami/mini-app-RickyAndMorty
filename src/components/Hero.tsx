import React from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-black to-gray-900 opacity-90" />
      <motion.div
        className="absolute -z-10 blur-3xl"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,255,180,0.4), transparent 60%)",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Contenido */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explora el Multiverso
      </motion.h1>

      <motion.p
        className="text-gray-400 mt-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Descubre personajes, planetas y locuras interdimensionales.
      </motion.p>

      {/* Buscador */}
      <motion.div
        className="flex mt-8 gap-2 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Input
          type="text"
          placeholder="Buscar personaje..."
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Button className="bg-green-500 hover:bg-green-400 text-black font-semibold">
          Buscar
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
