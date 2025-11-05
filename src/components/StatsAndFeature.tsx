import { Users, Tv, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const StatsAndFeatures = () => {
  return (
    <section className="w-full bg-gray-950 text-white py-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 space-y-16">
        {/* ---- STATS ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Personajes", value: "826+", icon: Users },
            { label: "Episodios", value: "51+", icon: Tv },
            { label: "Dimensiones", value: "???", icon: Globe },
            { label: "Curiosidades", value: "∞", icon: Sparkles },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="w-10 h-10 text-green-400" />
              <p className="text-3xl sm:text-4xl font-bold">{value}</p>
              <p className="text-sm opacity-75">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* ---- FEATURES ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Explora Personajes",
              desc: "Descubre cientos de personajes con detalles únicos.",
            },
            {
              title: "Busca Fácil",
              desc: "Filtra por nombre, estado, especie, género y más.",
            },
            {
              title: "Información Completa",
              desc: "Detalles de origen, ubicación, episodios y más.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-green-400/40 transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm opacity-80">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsAndFeatures;
