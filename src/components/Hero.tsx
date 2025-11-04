import React from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6">
      {/* Background cards decorativas */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center gap-6 opacity-50">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-64 h-80 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.3 }}
            transition={{ delay: i * 0.3, duration: 1.2 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Rick & Morty Explorer
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-400 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Explora personajes, episodios y mundos del universo más loco de la TV.
      </motion.p>

      {/* Buscador */}
      <motion.div
        className="mt-10 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <input
          type="text"
          placeholder="Buscar personaje..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400"
        />
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl transition-all">
          Buscar
        </button>
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-green-400">+800</h3>
          <p className="text-gray-400">Personajes únicos</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-green-400">+120</h3>
          <p className="text-gray-400">Episodios disponibles</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-green-400">+30</h3>
          <p className="text-gray-400">Ubicaciones misteriosas</p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-16 flex flex-col items-center text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-sm mb-2">Explora personajes</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
