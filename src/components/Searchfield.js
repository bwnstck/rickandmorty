import "./searchfield.css";
import { createElement } from "../utils/elements";
function Searchfield() {
  const searchInput = createElement("input", {
    className: "form__input",
    placeholder: "Type your query",
  });
  const form = createElement("form", {
    className: "form",
    children: [searchInput],
  });
  return form;
}

export default Searchfield;
