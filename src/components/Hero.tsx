import { motion } from "framer-motion";
import HeroPortal from "../assets/hero-rm.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <img
        src={HeroPortal}
        alt="rick and morty portal background"
        className="absolute inset-0 h-full w-full object-cover "
      />

      {/* Text-Side Dark Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6 text-left"
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight
            drop-shadow-[0_0_12px_rgba(0,255,150,0.5)]"
          >
            Explora el Multiverso
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 leading-relaxed
            drop-shadow-[0_0_8px_rgba(0,255,150,0.35)]"
          >
            Viaja entre dimensiones, encuentra versiones alternas de tus héroes
            favoritos y descubre habilidades tan impredecibles como el universo
            mismo.
          </p>

          <p
            className="text-base md:text-lg text-white/60
            drop-shadow-[0_0_6px_rgba(0,255,150,0.28)]"
          >
            Cada personaje es único. Cada viaje, inolvidable.
          </p>
        </motion.div>
      </div>

      {/* Scroll CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center text-white/80"
      >
        <span className="text-sm md:text-base drop-shadow-[0_0_6px_rgba(0,255,150,0.3)]">
          Explorar personajes
        </span>
        <ChevronDown className="mt-1 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
