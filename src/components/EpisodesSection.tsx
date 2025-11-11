import { useEffect, useMemo, useState } from "react";
import { sortEpisodes, getEpisodes, type Episode } from "../services/episodes";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import EpisodeCard from "../components/EpisodeCard";
import { useNavigate } from "react-router-dom";

const SEASONS = ["S01", "S02", "S03", "S04", "S05"];

const EpisodesSection = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [season, setSeason] = useState("S01");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEpisodes();
        const sorted = sortEpisodes(data);
        setEpisodes(sorted);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtered = useMemo(
    () => episodes.filter((ep) => ep.episode.startsWith(season)),
    [episodes, season]
  );

  return (
    <section className="relative w-full max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 ">
      {/* back + season Select - aligned and responsive */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="w-full sm:w-auto">
          <Button
            onClick={() => navigate("/")}
            variant="default"
            className="h-10 w-full sm:w-auto px-4 py-2 flex items-center justify-center bg-emerald-400 hover:bg-emerald-500 text-black"
          >
            ← Volver
          </Button>
        </div>

        <div className="flex items-center gap-4 justify-center sm:justify-end">
          <div className="hidden sm:flex items-center text-white font-semibold h-10">
            Filtrar temporada
          </div>

          <Select value={season} onValueChange={setSeason}>
            <SelectTrigger className="h-10 w-[200px] bg-gray-800 border border-gray-700 flex items-center">
              <SelectValue placeholder="Seleccionar temporada" />
            </SelectTrigger>
            <SelectContent>
              {SEASONS.map((s) => (
                <SelectItem key={s} value={s}>
                  Temporada {s.replace("S", "")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <h2 className="text-4xl font-extrabold text-center mb-8 text-white tracking-tight">
        Explora los Episodios
      </h2>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-white opacity-80">Cargando...</p>
      )}

      {/* GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};

export default EpisodesSection;
