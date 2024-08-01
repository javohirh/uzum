function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}
import { pokemonCards } from "./data.js";

const sectionEl = document.querySelector(".product");
const favoutiteArray = document.querySelector(".modal-body");

const btns = document.querySelectorAll(".btn");
const template = document.querySelector("template");
const elHeart = getElement(".heart");

const elCategories = getElement("#categories-list");
const elOfcanvas = getElement(".offcanvas-body");
const elSort = getElement("#sort");
const elSearchInput = getElement("#search");
const elSubmitBtn = getElement("#submit-btn");
import { renderCard } from "./render.js";
import { renderLikedCard } from "./render.js";
window.addEventListener("DOMContentLoaded", function () {
  renderCard(pokemonCards);
});
export { sectionEl, template, getElement };
function checkLikes(where) {
  where.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-like")) {
      const id = +e.target.dataset.id;

      const likedArray = pokemonCards.filter((item) => {
        if (item.id == id) {
          item.isFavourite = !item.isFavourite;
        }
        return item.isFavourite;
      });

      localStorage.setItem("likedItem", JSON.stringify(likedArray));
      renderCard(pokemonCards);
      renderLikedCard(likedArray, favoutiteArray);
    }
  });
}
checkLikes(sectionEl);
checkLikes(favoutiteArray);

const likedElements = JSON.parse(localStorage.getItem("likedItem"));
console.log(likedElements);
