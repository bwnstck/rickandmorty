import "./app.css";
import Button from "./components/button";
import Character from "./components/Character";
import Header from "./components/Header";
import Searchfield from "./components/Searchfield";
import { getAllCharacters, getNextPage } from "./utils/api";
import { createElement } from "./utils/elements";
import createLoadMoreButton from "./components/Loadmore";

function App() {
  let lastName = null;
  let nextPage = null;
  const subtext = createElement("h2", {
    className: "pageSubtitle",
    innerText: "...leftClick() on Card for more Info",
  });
  const header = Header();

  const main = createElement("main");

<<<<<<< HEAD
  const UpButton = createElement("button", {
    className: "scrollUp__button",
    innerText: "UP",
  });

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
    console.log("value", name);
    const allCharacters = await getAllCharacters(name, page);

=======
  async function getCharacters(name, url) {
    let allCharacters = await getAllCharacters(name);
    console.log(name);
    console.log(url);
    console.log(allCharacters.info.next);
    if (allCharacters.info.next == "undefined") {
      console.log("nextPage");
      allCharacters = await getNextPage(url);
    }

    // console.log(allCharacters.info.next);
>>>>>>> LoadMore
    const newCharacters = allCharacters.results.map((character) =>
      Character({
        status: character.status,
        name: character.name,
        imgSrc: character.image,
        location: character.location,
        origin: character.origin,
      })
    );

    main.innerHTML = "";

    const LoadMoreButton = createLoadMoreButton({
      innerText: "Load More 🧘‍♀️",
      onclick: () => getCharacters(name, url),
    });
    LoadMoreButton.disabled = !allCharacters.info.next;
    main.append(...newCharacters, LoadMoreButton);
  }
  getCharacters();

  const searchBar = Searchfield(getCharacters);

  const container = createElement("div", {
    className: "container",
    id: "Container",
    children: [header, subtext, searchBar, main],
  });
  return container;
}

export default App;
