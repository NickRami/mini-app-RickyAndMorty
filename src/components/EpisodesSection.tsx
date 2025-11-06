import { useEffect, useState } from "react";
import { sortEpisodes, getEpisodes, type Episode } from "../services/episodes";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Film, Info } from "lucide-react";

const EpisodesSection = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [filtered, setFiltered] = useState<Episode[]>([]);
  const [season, setSeason] = useState<string>("S01");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEpisodes();
      const sorted = sortEpisodes(data);
      setEpisodes(sorted);

      // Inicial → filtrar S01 desde el comienzo
      const firstSeason = sorted.filter((ep) => ep.episode.startsWith("S01"));
      setFiltered(firstSeason);
    };
    fetchData();
  }, []);

  const handleSeasonChange = (value: string) => {
    setSeason(value);

    const filteredSeason = episodes.filter((ep) =>
      ep.episode.startsWith(value)
    );

    setFiltered(filteredSeason);
  };

  const getEpisodeNumber = (code: string) => parseInt(code.split("E")[1]);

  return (
    <section className="w-full max-w-7xl mx-auto py-14 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        Explora los Episodios
      </h2>

      <div className="flex justify-center mb-10">
        <Select value={season} onValueChange={handleSeasonChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Seleccionar temporada" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="S01">Temporada 1</SelectItem>
            <SelectItem value="S02">Temporada 2</SelectItem>
            <SelectItem value="S03">Temporada 3</SelectItem>
            <SelectItem value="S04">Temporada 4</SelectItem>
            <SelectItem value="S05">Temporada 5</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((episode) => (
          <Card
            key={episode.id}
            className="bg-gray-800 border border-gray-700 hover:border-emerald-500 transition h-full"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
                <Film className="w-5 h-5 text-emerald-400" />
                {episode.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-400" />
                <span className="font-medium text-emerald-400">Episodio:</span>
                {getEpisodeNumber(episode.episode)}
              </p>

              <p className="text-sm text-gray-300 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span className="font-medium text-emerald-400">Aire:</span>
                {episode.air_date}
              </p>

              <div className="pt-3">
                <Button
                  variant="default"
                  className="w-full text-black font-semibold bg-emerald-400 hover:bg-emerald-500 flex items-center gap-2 justify-center"
                >
                  <Info className="w-4 h-4" /> Ver detalles
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default EpisodesSection;
