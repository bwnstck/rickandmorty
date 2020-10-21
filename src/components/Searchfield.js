import "./searchfield.css";
import { createElement } from "../utils/elements";

function Searchfield(getCharacters) {
  const searchInput = createElement("input", {
    className: "form__input",
    placeholder: "Type your query",
    type: "text",
  });
  const form = createElement("form", {
    className: "form",
    children: [searchInput],
    onsubmit: (event) => {
      event.preventDefault();
      getCharacters(searchInput.value);
      searchInput.value = "";
    },
  });
  return form;
}

export default Searchfield;
