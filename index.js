const slideLeft = document.querySelector('.left');
const slideRight = document.querySelector('.right');
const slider = document.querySelector('.slide-one-container');

slideLeft.addEventListener('click', () => {
  slider.scrollLeft -= 300
});

slideRight.addEventListener("click", () => {
  slider.scrollLeft += 300;
});