export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export async function getCharacters(): Promise<Character[]> {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  if (!res.ok) {
    throw new Error("Error al obtener personajes");
  }

  const data = await res.json();
  console.log(data);

  return data.results;
}
