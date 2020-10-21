import "./character.css";
import { createElement } from "../utils/elements";

function Character({ ...props }) {
  const title = createElement("div", {
    className: "card__title",
    innerText: props.name,
  });
  const titleBack = createElement("div", {
    className: "card__title",
    innerText: props.name,
  });
  const avatar = createElement("img", {
    className: "card__avatar",
    src: props.imgSrc,
    alt: props.name,
  });
  const locationHeader = createElement("div", {
    className: "card__locationHeader",
    innerText: "Location",
  });
  const avatarLocation = createElement("p", {
    className: "card__avatarLocation",
    innerText: props.location.name,
  });
  const originHeader = createElement("div", {
    className: "card__originHeader",
    innerText: "Origin",
  });
  const originLocation = createElement("p", {
    className: "card__avatarOrigin",
    innerText: props.origin.name,
  });

  const flipCardBack = createElement("div", {
    className: "card__back",
  });
  const flipCardFront = createElement("div", {
    className: "card__front",
  });
  const flipCardInner = createElement("div", {
    className: "card__inner",
    children: [flipCardFront, flipCardBack],
  });
  const characterCard = createElement("div", {
    className: "card",
    children: [flipCardInner],
  });
  flipCardFront.append(title, avatar);
  flipCardBack.append(
    titleBack,
    originHeader,
    originLocation,
    locationHeader,
    avatarLocation
  );

  return characterCard;
}

export default Character;
