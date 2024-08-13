// script.js

// Get the elements
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const close = document.getElementById('close');

// Function to open the lightbox
function openLightbox(src) {
    lightboxImage.src = src;
    lightbox.classList.add('show');
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.classList.remove('show');
}

// Add event listeners
galleryImages.forEach(image => {
    image.addEventListener('click', () => openLightbox(image.src));
});

close.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
