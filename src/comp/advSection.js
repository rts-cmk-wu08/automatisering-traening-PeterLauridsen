import { advantages } from "../data.js";
import advArticle from "./advArticle.js";
import "./advSection.scss";

console.log(advantages);
let advSection = function () {
  let element = document.createElement("div");
  element.classList.add("advantages");

  advantages.forEach((advantage) => {
    console.log(advantage);

    let article = document.createElement("article");

    element.append(article);
    element.append(advArticle(advantage));
  });

  return element;
};

export default advSection;
