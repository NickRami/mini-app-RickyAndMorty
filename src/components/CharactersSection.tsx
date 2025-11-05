import { useEffect, useState } from "react";
import { type Character, getCharacters } from "../services/characters";

const CharactersSection = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const chars = await getCharacters();
        setCharacters(chars);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Personajes
      </h2>

      {/* Loading */}
      {loading && <p className="text-center text-gray-300">Cargando...</p>}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {!loading &&
          characters.map((c) => (
            <div
              key={c.id}
              className="rounded-xl overflow-hidden bg-gray-800 border border-gray-700 hover:scale-105 transition-transform"
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-center py-3 font-semibold">{c.name}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CharactersSection;
