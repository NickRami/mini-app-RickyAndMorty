export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  origin?: {
    // Added optional origin property
    name: string;
    url: string;
  };
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
