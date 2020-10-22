import "./character.css";
import { createElement } from "../utils/elements";

function Character({ ...props }) {
  const title = createElement("div", {
    className: "card__title",
  });
  const titleBack = createElement("div", {
    className: "card__title",
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
    onclick: (event) => {
      // !Hint von Leon zum verhindern, dass anderes onclick ausgeführt wird
      event.stopPropagation();
      flipCardInner.style.transform = "rotateY(0deg)";
    },
  });
  const flipCardFront = createElement("div", {
    className: "card__front",
    onclick: () => {
      flipCardInner.style.transform = "rotateY(180deg)";
    },
  });
  const flipCardInner = createElement("div", {
    className: "card__inner",
    children: [flipCardFront, flipCardBack],
  });
  const characterCard = createElement("div", {
    className: "card",
    children: [flipCardInner],
  });
  // console.log(props);

  const statusIcon = props.status === "Alive" ? "🟢" : "🔴";

  title.innerText = `${statusIcon} ${props.name}`;
  titleBack.innerText = `${statusIcon} ${props.name}`;

  if (originLocation.innerText == avatarLocation.innerText) {
    flipCardBack.append(titleBack, originHeader, originLocation);
  } else {
    flipCardBack.append(
      titleBack,
      originHeader,
      originLocation,
      locationHeader,
      avatarLocation
    );
  }
  flipCardFront.append(title, avatar);

  return characterCard;
}

export default Character;
