import "./loadmore.css";
import { createElement } from "../utils/elements";
import { getNextPage } from "../utils/api";

export default function createLoadMoreButton(url) {
  const loadMore = createElement("button", {
    className: "loadMoreButton",
    innerText: "Load More 🧘‍♀️",
    onclick: () => getNextPage(url),
  });
  console.log("url", url);

  return loadMore;
}
