import "./character.css";
import { createElement } from "../utils/elements";
function Character(props) {
  const title = createElement("div", {
    className: "card__title",
    innerText: props.name,
  });
  const avatar = createElement("img", {
    className: "card__avatar",
    src: props.imgSrc,
    alt: props.name,
  });
  const characterCard = createElement("div", {
    className: "card",
    children: [title, avatar],
  });
  return characterCard;
}

export default Character;
