import "./app.css";
import Button from "./components/Button";
import Character from "./components/Character";
import Header from "./components/Header";
import Searchfield from "./components/Searchfield";
import { getAllCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  let lastName = null;
  let nextPage = null;

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  const subtext = createElement("h2", {
    className: "pageSubtitle",
    innerText: "...leftClick() on Card for more Info",
  });
  const header = Header();
  const main = createElement("main");
  const UpButton = Button({
    className: "scrollUp",
    innerText: "⬆",
    // onclick: function () {
    //    window.scroll(0, 0);
    // },
    onclick: () => {
      window.scroll(0, 0);
    },
  });

  const loadMoreButton = Button({
    innerText: "🧘‍♀️ Load more 🧘‍♀️",
    onclick: () => {
      getCharacters(lastName, nextPage);
    },
  });

  // !Main Function
  async function getCharacters(name, page) {
    const allCharacters = await getAllCharacters(name, page);

    const newCharacters = allCharacters.results.map((character) =>
      Character({
        status: character.status,
        name: character.name,
        imgSrc: character.image,
        location: character.location,
        origin: character.origin,
        created: character.created,
        isFavorite: favorites.includes(character.name),
      })
    );
    main.append(...newCharacters);
    nextPage = allCharacters.info.next?.match(/\d+/)[0];
    loadMoreButton.disabled = !allCharacters.info.next;
    lastName = name;
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
    children: [header, subtext, searchBar, main, loadMoreButton, UpButton],
  });

  window.addEventListener("scroll", () => {
    const offsetY =
      loadMoreButton.offsetParent.offsetHeight - window.innerHeight - 200;
    if (offsetY < window.pageYOffset) {
      loadMoreButton.click();
    }
  });

  return container;
}

export default App;
