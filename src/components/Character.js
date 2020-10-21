import "./character.css";
import { createElement } from "../utils/elements";

function Character({ ...props }) {
  const title = createElement("div", {
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

  const characterCard = createElement("div", {
    className: "card",
  });

  if (originLocation.innerText == avatarLocation.innerText) {
    characterCard.append(title, originHeader, originLocation, avatar);
  } else {
    characterCard.append(
      title,
      originHeader,
      originLocation,
      locationHeader,
      avatarLocation,
      avatar
    );
  }

  return characterCard;
}

export default Character;
