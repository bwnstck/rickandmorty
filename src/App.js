import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Searchfield from "./components/Searchfield";
import { getAllCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const subtext = createElement("h2", {
    className: "pageSubtitle",
    innerText: "...leftClick() on Card for more Info",
  });
  const header = Header();

  const main = createElement("main");

  async function getCharacters(name) {
    const allCharacters = await getAllCharacters(name);

    const newCharacters = allCharacters.map((character) =>
      Character({
        status: character.status,
        name: character.name,
        imgSrc: character.image,
        location: character.location,
        origin: character.origin,
      })
    );
    main.innerHTML = "";
    main.append(...newCharacters);
  }
  getCharacters();
  const searchBar = Searchfield(getCharacters);

  const container = createElement("div", {
    className: "container",
    children: [header, subtext, searchBar, main],
  });
  return container;
}

export default App;
