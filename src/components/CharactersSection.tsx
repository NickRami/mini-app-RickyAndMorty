import { useEffect, useState } from "react";
import { type Character, getCharacters } from "../services/characters";

const CharactersSection = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="characters" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Personajes</h2>

      {/* Loading */}
      {loading && <p className="text-center text-gray-400">Cargando...</p>}

      {/* Grid */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-6 px-4 max-w-7xl mx-auto
      "
      >
        {!loading &&
          characters.map((c) => (
            <div
              key={c.id}
              className="
                bg-gray-800 rounded-xl overflow-hidden border border-gray-700
                hover:scale-105 hover:border-emerald-500/60
                transition-all duration-300 shadow-lg
              "
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 space-y-3">
                {/* Name */}
                <h3 className="text-xl font-semibold drop-shadow-[0_0_6px_rgba(0,255,150,0.3)]">
                  {c.name}
                </h3>

                {/* Status */}
                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <span
                    className={`
                      inline-block h-3 w-3 rounded-full 
                      ${
                        c.status === "Alive"
                          ? "bg-emerald-400"
                          : c.status === "Dead"
                          ? "bg-red-500"
                          : "bg-gray-400"
                      }
                    `}
                  />
                  {c.status}
                </p>

                {/* Gender */}
                <p className="text-sm text-gray-400">
                  Género: <span className="text-white">{c.gender}</span>
                </p>

                {/* Location */}
                <p className="text-sm text-gray-400">
                  Ubicación:{" "}
                  <span className="text-white">{c.location?.name}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CharactersSection;
