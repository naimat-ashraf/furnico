

// HERO CAROUSEL MULTI-IMAGE
const heroImages = document.querySelectorAll('.hero-image');
let currentIndex = 0;

const showHeroImage = (index) => {
    heroImages.forEach((img, i) => {
        img.classList.toggle('hidden', i !== index);
    });
};

document.querySelector('.arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
    showHeroImage(currentIndex);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % heroImages.length;
    showHeroImage(currentIndex);
});
