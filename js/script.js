// Select all slideshow images and buttons
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slide-dot');

// Start with the first image
let currentSlide = 0;

// Function to display a specific image
function showSlide(index) {

    // Hide all images
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remove active state from buttons
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show selected image
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlide = index;
}

// Function to move to the next image
function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

// Automatically change images every 4 seconds
let slideshowTimer = setInterval(nextSlide, 4000);

// Allow visitors to select an image manually
dots.forEach(dot => {
    dot.addEventListener('click', () => {

        const index = Number(dot.dataset.slide);
        showSlide(index);

        // Restart timer after clicking
        clearInterval(slideshowTimer);
        slideshowTimer = setInterval(nextSlide, 4000);
    });
});