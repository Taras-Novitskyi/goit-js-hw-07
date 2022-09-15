import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGalleryEl = document.querySelector(".gallery");

function createGalleryItemsEl(gallery) {
  return gallery
    .map(
      (picture) =>
        `<div class="gallery__item"><a class="gallery__link" href="${picture.original}"><img class="gallery__image" src="${picture.preview}" data-source="${picture.original}" alt="${picture.description}"/></a></div>`
    )
    .join("");
}

const galleryItemsEl = createGalleryItemsEl(galleryItems);
divGalleryEl.innerHTML = galleryItemsEl;

divGalleryEl.addEventListener("click", listenClickOnBtn);

function listenClickOnBtn(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const targetEl = e.target;
  showModal(targetEl);
}

function showModal(targetEl) {
  const instance = basicLightbox.create(
    `
    <div class="modal">
		<img class="gallery__image" hight="200" src="${targetEl.dataset.source}"/>
    </div>
`,
    {
      onShow: (instance) => {
        instance.element().querySelector(".gallery__image").onclick =
          instance.close;
        
        document.addEventListener("keydown", closeOnEscape);
       
      },
      onClose: () => {
        document.removeEventListener("keydown", closeOnEscape);
      },
    }
  );

   function closeOnEscape(event) {
     if (event.code === "Escape") {
       console.log("Keydown: ", event.code);
       instance.close();
     }
  };

  instance.show();
}
