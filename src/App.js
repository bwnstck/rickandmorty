import "./app.css";
import Button from "./components/button";
import Character from "./components/Character";
import Header from "./components/Header";
import Searchfield from "./components/Searchfield";
import { getAllCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  let lastName = null;
  let nextPage = null;
  const subtext = createElement("h2", {
    className: "pageSubtitle",
    innerText: "...leftClick() on Card for more Info",
  });
  const header = Header();

  const main = createElement("main");

  const UpButton = Button({ className: "scrollUp__button", innerText: "⬆" });

  const scrollUp = createElement("a", {
    className: "scrollUp",
    href: "#Container",
    children: [UpButton],
  });

  const loadMoreButton = Button({
    innerText: "🧘‍♀️ Load more 🧘‍♀️",
    onclick: () => {
      getCharacters(lastName, nextPage);
    },
  });
  async function getCharacters(name, page) {
    const allCharacters = await getAllCharacters(name, page);

    const newCharacters = allCharacters.results.map((character) =>
      Character({
        status: character.status,
        name: character.name,
        imgSrc: character.image,
        location: character.location,
        origin: character.origin,
      })
    );
    main.append(...newCharacters);

    nextPage = allCharacters.info.next?.match(/\d+/)[0];
    loadMoreButton.disabled = !allCharacters.info.next;
    lastName = name;

    main.append(scrollUp);
  }
  getCharacters();
  const searchBar = Searchfield({
    onchange: (value) => {
      main.innerHTML = "";

      getCharacters(value);
    },
  });

  const container = createElement("div", {
    className: "container",
    id: "Container",
    children: [header, subtext, searchBar, main, loadMoreButton],
  });
  return container;
}

export default App;
