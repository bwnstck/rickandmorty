import "./searchfield.css";
import { createElement } from "../utils/elements";

function Searchfield({ onchange }) {
  const input = createElement("input", {
    className: "form__input",
    placeholder: "…type your query",
    type: "text",
  });
  const form = createElement("form", {
    className: "form",
    children: [input],
    onsubmit: (event) => {
      event.preventDefault();
      onchange(input.value);
    },
  });
  return form;
}

export default Searchfield;
