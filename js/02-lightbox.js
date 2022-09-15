import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGalleryEl = document.querySelector(".gallery");

function createGalleryItemsEl(gallery) {
  return gallery
    .map(
      (picture) =>
        `<a class="gallery__item" href="${picture.original}"><img class="gallery__image" src="${picture.preview}" alt="${picture.description}" /></a>`
    )
    .join("");
}
const galleryItemsEl = createGalleryItemsEl(galleryItems);
divGalleryEl.innerHTML = galleryItemsEl;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
});
 gallery.on("show.simplelightbox", function () {});
divGalleryEl.addEventListener("click", listenClickOnBtn);

function listenClickOnBtn(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}