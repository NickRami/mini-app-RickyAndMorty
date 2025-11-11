import { useEffect, useState } from "react";
import { type Character, getCharacters } from "../services/characters";
import { MapPin, Users } from "lucide-react";

const CharactersSection = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const statusConfig = {
    Alive: {
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-500/20 border-emerald-500/40",
      dot: "bg-emerald-400",
    },
    Dead: {
      color: "from-red-600 to-orange-600",
      bg: "bg-red-500/20 border-red-500/40",
      dot: "bg-red-500",
    },
    unknown: {
      color: "from-gray-500 to-gray-600",
      bg: "bg-gray-500/20 border-gray-500/40",
      dot: "bg-gray-400",
    },
  };

  const getConfig = (status: string) =>
    statusConfig[status as keyof typeof statusConfig] || statusConfig.unknown;

  return (
    <section
      id="characters"
      className="relative py-20 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
            Personajes
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto" />
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {!loading &&
            characters.map((c) => {
              const config = getConfig(c.status);
              const isHovered = hoveredId === c.id;

              return (
                <div
                  key={c.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredId(c.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Glow */}
                  <div
                    className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(96,165,250,0.3))",
                    }}
                  />

                  {/* Card */}
                  <div className="relativebg-linear-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 group-hover:border-emerald-500/60 transition-all duration-300 shadow-xl group-hover:shadow-emerald-600/50 h-full flex flex-col transform group-hover:-translate-y-2">
                    {/* ✅ FIX — Image container */}
                    <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

                      {/* Status badge */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 w-full bg-linear-to-r${
                          config.color
                        } transition-all duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${config.dot} animate-pulse`}
                        />
                        <span>{c.status}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4 flex-1 flex flex-col">
                      {/* Name */}
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
                        {c.name}
                      </h3>

                      <div className="flex-1 space-y-3">
                        {/* Gender */}
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-gray-400">Género:</span>
                          <span className="font-medium">{c.gender}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-2 text-sm text-gray-300">
                          <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-gray-400">Ubicación:</p>
                            <p className="font-medium line-clamp-1">
                              {c.location?.name}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Origin */}
                      {c.origin && (
                        <div className="pt-3 border-t border-gray-700">
                          <p className="text-xs text-gray-400">
                            Origen:{" "}
                            <span className="text-emerald-300 font-semibold">
                              {c.origin.name}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Status bar */}
                    <div
                      className={`h-1 w-full bg-linear-to-r ${
                        config.color
                      } transition-all duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
