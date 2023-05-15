import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  // Формування розмітки
  const createGalleryItem = ({ preview, original, description }) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = preview;
    galleryImage.alt = description;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);

    return galleryItem;
  };

  const galleryItemsMarkup = galleryItems.map(createGalleryItem);
  gallery.append(...galleryItemsMarkup);

  // Підключення SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
  });
});
