export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}

export async function getAllCharacters(name, page = 1) {
  let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  if (name) {
    url += `&name=${name}`;
    const response = await fetch(url);
    const characterData = await response.json();
    return characterData;
  } else {
    const response = await fetch(url);
    const characterData = await response.json();
    // console.log(characterData.results);
    return characterData;
  }
}
