import "./loadmore.css";
import { createElement } from "../utils/elements";

export default function createLoadMoreButton(props) {
  const loadMore = createElement("button", {
    className: "loadMoreButton",
    ...props,
  });

  return loadMore;
}
