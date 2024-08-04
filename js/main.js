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
let imageSrc = "";
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
  imageSrc = image.src;
};
document.getElementById("file").addEventListener("change", loadFile);

const likedElements = JSON.parse(localStorage.getItem("likedItem"));

const modalInputBody = getElement("#modal-product");
const proName = getElement(".product-name", modalInputBody);
const proComment = getElement(".product-comment", modalInputBody);
const proMonthly = getElement(".product-monthly", modalInputBody);
const proPrice = getElement(".product-price", modalInputBody);
const proDiscount = getElement(".product-discount", modalInputBody);
const proPlus = getElement("#plus");
proPlus.addEventListener("click", () => {
  const id = pokemonCards.length;
  const nameVal = proName.value;
  const commentVal = proComment.value;
  const monthlyVal = proMonthly.value;
  const priceVal = proPrice.value;
  const discountVal = proDiscount.value;
  const newProduct = {
    id: id + 1,
    title: nameVal,
    img: imageSrc,
    comment: commentVal,
    categories: "Ma'lumot uchun matn",
    monthlyPay: monthlyVal,
    realPrize: priceVal,
    discountPrice: discountVal,
    isFavourite: false,
  };
  pokemonCards.push(newProduct);
  console.log(pokemonCards);

  renderCard(pokemonCards);
  proName.value = "";
  proComment.value = "";
  proMonthly.value = "";
  proPrice.value = "";
  proDiscount.value = "";
});
