import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Film, Info, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  extractEpisodeNumber,
  extractSeasonNumber,
} from "../services/episodes";

type Props = {
  episode: {
    id: number;
    name: string;
    episode: string;
    air_date: string;
  };
};

const EpisodeCard = ({ episode }: Props) => {
  return (
    <div className="relative group perspective-1000 h-full">
      <Card className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-800 transform transition-transform duration-500 will-change-transform group-hover:-translate-y-3 group-hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden h-full flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex gap-2 items-start">
            <Film className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
            <CardTitle className="text-base font-semibold text-white line-clamp-2 leading-tight flex-1">
              {episode.name}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 flex-1 flex flex-col pb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium text-emerald-400">Episodio:</span>
              <span>{extractEpisodeNumber(episode.episode)}</span>
            </p>

            <p className="text-sm text-gray-300 flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-medium text-emerald-400">Aire:</span>
              <span>{episode.air_date}</span>
            </p>
          </div>

          <Link to={`/episode/${episode.id}`} className="mt-auto block w-full">
            <button className="w-full h-10 text-black font-semibold bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 transition-colors flex items-center gap-2 justify-center rounded-md">
              <Zap className="w-4 h-4" />
              <span>Ver detalles</span>
            </button>
          </Link>
        </CardContent>
      </Card>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <span className="opacity-80">
          Temporada {extractSeasonNumber(episode.episode)}
        </span>
        <span className="opacity-60">Duración: —</span>
      </div>
    </div>
  );
};

export default EpisodeCard;
