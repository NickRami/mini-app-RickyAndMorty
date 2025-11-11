export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export const extractEpisodeNumber = (code: string) =>
  Number(code.split("E")[1]);

export const extractSeasonNumber = (code: string) =>
  code.split("E")[0].replace("S", "");

export const getEpisodes = async (): Promise<Episode[]> => {
  let url = "https://rickandmortyapi.com/api/episode";
  let allEpisodes: Episode[] = [];

  while (url) {
    const res = await fetch(url); // pedimos una página
    const data = await res.json();

    allEpisodes = [...allEpisodes, ...data.results]; // agregamos episodios

    url = data.info.next; // si hay siguiente página, seguimos
  }

  return allEpisodes; // devolvemos todo
};
export const sortEpisodes = (eps: Episode[]) =>
  eps.sort(
    (a, b) =>
      Number(a.episode.slice(1, 3)) - Number(b.episode.slice(1, 3)) ||
      Number(a.episode.slice(4)) - Number(b.episode.slice(4))
  );
