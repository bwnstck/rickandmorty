export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}

export async function getAllCharacters() {
  const url = "https://rickandmortyapi.com/api/character/";
  const response = await fetch(url);
  const characterData = await response.json();
  return characterData.results;
}
