import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEpisodes, type Episode } from "../services/episodes";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Calendar, Film, ArrowLeft, Zap } from "lucide-react";

const EpisodeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [characters, setCharacters] = useState<any[]>([]);
  const [hoveredChar, setHoveredChar] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEpisodes();
      const found = data.find((ep) => ep.id === Number(id));
      setEpisode(found ?? null);

      if (found?.characters) {
        const charData = await Promise.all(
          found.characters.map((url: string) =>
            fetch(url).then((r) => r.json())
          )
        );
        setCharacters(charData);
      }
    };
    fetchData();
  }, [id]);

  if (!episode)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-white mt-4 text-lg">Cargando episodio...</p>
        </div>
      </div>
    );

  return (
    <section className="relative w-full min-h-screen  bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Fondo con silueta temática */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Patrón de grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto py-14 px-4">
        {/* Botón atrás */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 mb-8 text-emerald-400 hover:text-emerald-300 transition-all duration-300 hover:gap-3"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Volver</span>
        </button>

        {/* Card principal con animación */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Card className="relative bg-linear-to-br from-gray-800 to-gray-900 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 shadow-2xl group">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-4xl font-black bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {episode.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-4">
                    <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <span className="text-emerald-300 text-sm font-semibold">
                      Episodio activo
                    </span>
                  </div>
                </div>
                {/* Animación de fuego */}
                <div className="relative w-20 h-20">
                  <div
                    className="absolute inset-0 animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    <div className="w-full h-full bg-linear-to-t from-red-600 via-orange-500 to-yellow-400 rounded-full opacity-70 blur-lg"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap
                      className="w-10 h-10 text-yellow-300 animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
                  <Calendar className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Fecha de emisión</p>
                    <p className="text-white font-semibold text-lg">
                      {episode.air_date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
                  <Film className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Número de episodio</p>
                    <p className="text-white font-semibold text-lg">
                      {episode.episode}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sección de personajes */}
        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white mb-2">
              Personajes en este episodio
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </div>

          {characters.length === 0 ? (
            <p className="text-center text-gray-400 py-12">
              No hay personajes disponibles
            </p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {characters.map((char) => (
                <div
                  key={char.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredChar(char.id)}
                  onMouseLeave={() => setHoveredChar(null)}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <Card className="relative bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:border-emerald-400/60 transition-all duration-300 overflow-hidden h-full shadow-lg">
                    {/* Container de imagen con overlay */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                      {/* Estado del personaje */}
                      {hoveredChar === char.id && (
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-500/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-white animate-in fade-in">
                          <Zap className="w-3 h-3" /> Activo
                        </div>
                      )}
                    </div>

                    <CardContent className="pt-4">
                      <CardTitle className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {char.name}
                      </CardTitle>
                      {char.species && (
                        <p className="text-sm text-gray-400 mt-2">
                          {char.species}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* CSS para animaciones */}
      <style>{`
        @keyframes flameFlicker {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-flame {
          animation: flameFlicker 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EpisodeDetail;
