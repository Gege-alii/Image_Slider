let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex));
}

function forwardSlide() {
    showSlide(slideIndex + 1);
}

function previousSlide() {
    showSlide(slideIndex - 1);
}

function startAutoSlide() {
    return setInterval(forwardSlide, 5000); 
}

let autoSlideInterval = startAutoSlide();

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.slider-container').addEventListener('touchstart', (e) => {
    touchStart = e.changedTouches[0].screenX;
});

document.querySelector('.slider-container').addEventListener('touchend', (e) => {
    touchEnd = e.changedTouches[0].screenX;
    if (touchEnd < touchStart - 50) forwardSlide();
    if (touchEnd > touchStart + 50) previousSlide();
});

document.querySelector('.forward-button').addEventListener('click', forwardSlide);
document.querySelector('.previous-button').addEventListener('click', previousSlide);

dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));

document.querySelector('.slider-container').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.slider-container').addEventListener('mouseout', () => {
    autoSlideInterval = startAutoSlide();
});

showSlide(slideIndex);

  //loading screen
  document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500); 
  });
