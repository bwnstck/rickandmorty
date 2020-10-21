import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import { getCharacterById } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  // const title = createElement("h1", {
  //   className: "pageTitle",
  //   innerText: "Rick & Morty",
  // });

  const subtext = createElement("h2", {
    className: "pageSubtitle",
    innerText: "--//..api() => queryMaster",
  });
  const header = Header();

  const main = createElement("main");

  async function getCharacters() {
    for (let i = 1; i < 21; i++) {
      const characterI = await getCharacterById(i);
      main.append(
        Character({
          name: characterI.name,
          imgSrc: characterI.image,
          episode: characterI.episode[1],
        })
      );
    }
  }
  getCharacters();

  const container = createElement("div", {
    children: [header, subtext, main],
  });
  return container;
}

export default App;
