export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}

export async function getAllCharacters(name) {
  const url = "https://rickandmortyapi.com/api/character/";
  if (name) {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const response = await fetch(url);
    const characterData = await response.json();
    return characterData.results;
  } else {
    const response = await fetch(url);
    const characterData = await response.json();
    // console.log(characterData.results);
    return characterData;
  }
}
export async function getNextPage(urlQuery) {
  const url = urlQuery;
  const response = await fetch(url);
  const characterData = await response.json();
  // console.log(characterData.results);
  return characterData;
}
