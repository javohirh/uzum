import { sectionEl, template, getElement } from "./main.js";

export function renderCard(menuItems, where = sectionEl) {
  where.textContent = null;

  menuItems.map((item) => {
    const newElement = template.content.cloneNode(true);

    const topImg = getElement(".card-img-top", newElement);
    const cardLike = getElement(".card-like", newElement);
    const title = getElement(".card-title", newElement);
    const weight = getElement(".card-weight", newElement);
    const age = getElement(".card-age", newElement);
    const comment = getElement(".comment", newElement);
    const discountPrice = getElement(".discount", newElement);
    cardLike.dataset.id = item.id;
    if (item.isFavourite) {
      cardLike.classList.remove("fa-regular");
      cardLike.classList.add("fa-solid", "liked");
    }

    topImg.src = item.img;
    title.textContent = item.title;
    weight.textContent = item.monthlyPay;
    age.innerHTML = `<del>${item.realPrize}</del>`;
    comment.innerHTML = `<i class="fa-solid fa-star"></i> ${item.comment}`;
    discountPrice.textContent = item.discountPrice + " So'm";

    where.appendChild(newElement);
  });
}
export function renderLikedCard(menuItems, where = sectionEl) {
  where.textContent = null;

  menuItems.map((item) => {
    const newElement = template.content.cloneNode(true);

    const topImg = getElement(".card-img-top", newElement);
    const cardLike = getElement(".card-like", newElement);
    const title = getElement(".card-title", newElement);
    const weight = getElement(".card-weight", newElement);
    const age = getElement(".card-age", newElement);
    const comment = getElement(".comment", newElement);
    const discountPrice = getElement(".discount", newElement);
    cardLike.dataset.id = item.id;
    if (item.isFavourite) {
      cardLike.classList.remove("fa-regular");
      cardLike.classList.add("fa-solid", "liked");
    }

    topImg.src = item.img;
    title.textContent = item.title;
    weight.textContent = item.monthlyPay;
    age.innerHTML = `<del>${item.realPrize}</del>`;
    comment.innerHTML = `<i class="fa-solid fa-star"></i> ${item.comment}`;
    discountPrice.textContent = item.discountPrice + " So'm";

    where.appendChild(newElement);
  });
}
