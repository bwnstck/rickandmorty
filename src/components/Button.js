import { createElement } from "../utils/elements";

export default function Button(props) {
  const button = createElement("button", {
    className: "button",
    ...props,
  });
  return button;
}
