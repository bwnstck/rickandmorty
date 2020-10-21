import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Searchfield from "./components/Searchfield";
import { getAllCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const subtext = createElement("h2", {
    className: "pageSubtitle",
    innerText: "--//..api() => queryMaster",
  });
  const header = Header();

  const main = createElement("main");

  const searchBar = Searchfield();
  async function getCharacters() {
    const allCharacters = await getAllCharacters();

    const newCharacters = allCharacters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
        location: character.location,
        origin: character.origin,
      })
    );

    main.append(...newCharacters);
  }
  getCharacters();

  const container = createElement("div", {
    className: "container",
    children: [header, subtext, searchBar, main],
  });
  return container;
}

export default App;
