import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import HeroPortal from "../assets/hero-rm.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [q, setQ] = useState("");

  const handleExplore = () => {
    const el = document.getElementById("characters");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900 text-white flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroPortal})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Glow portal */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-[44vw] max-w-[700px] h-[44vw] max-h-[700px] rounded-full bg-green-400/18 blur-[120px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-6 text-center md:text-left">
        {/* Title */}
        <motion.h1
          className="font-extrabold leading-tight text-white"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Explora el <span className="text-green-400">Multiverso</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-xl mx-auto md:mx-0 text-[clamp(1rem,2vw,1.15rem)] text-gray-300"
        >
          Aventúrate por dimensiones desconocidas. Busca personajes, descubre
          ubicaciones y conoce episodios del universo de Rick & Morty.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center max-w-md mx-auto md:mx-0"
        >
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar personaje…"
            className="bg-white/10 text-white placeholder:text-gray-300 border-white/10"
          />

          <Button
            onClick={() => console.log("buscar:", q)}
            className="min-w-[120px]"
          >
            Buscar
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-gray-200 hover:text-white"
      >
        <span className="text-xs mb-1">Explorar personajes</span>
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>
    </section>
  );
};

export default Hero;
