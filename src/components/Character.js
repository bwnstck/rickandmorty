import "./character.css";
import { createElement } from "../utils/elements";

function Character({ ...props }) {
  let isFavorite = props.isFavorite;

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
    loading: "lazy",
  });
  const created = createElement("div", {
    className: "card__created",
    innerText: props.created,
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

  // !Fav-Icon
  const favouriteChar = createElement("btn", {
    className: "favouriteButton",
    innerHTML: isFavorite
      ? `<i class="fas fa-star"></i>`
      : `<i class="far fa-star"></i>`,
    onclick: (event) => {
      event.stopPropagation();
      let currentFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      isFavorite = currentFavorites.includes(props.name);

      if (isFavorite) {
        currentFavorites = currentFavorites.filter(
          (favorite) => favorite !== props.name
        );
      } else {
        console.log("else schleife", props.name);
        currentFavorites.push(props.name);
      }
      console.log(currentFavorites);
      localStorage.setItem("favorites", JSON.stringify(currentFavorites));

      favouriteChar.innerHTML = isFavorite
        ? `<i class="fas fa-star"></i>`
        : `<i class="far fa-star"></i>`;
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
  title.append(favouriteChar);
  if (originLocation.innerText == avatarLocation.innerText) {
    flipCardBack.append(titleBack, originHeader, originLocation);
  } else {
    flipCardBack.append(
      titleBack,
      originHeader,
      originLocation,
      locationHeader,
      avatarLocation,
      created
    );
  }
  flipCardFront.append(title, avatar);

  return characterCard;
}

export default Character;
