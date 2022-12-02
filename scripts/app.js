const slides = document.querySelectorAll('input[data-slide]');
const imgElement = document.querySelector('#img');

// Самый просто случай когда не требуется анимация
slides.forEach(function(slide) {
  slide.addEventListener('change', (event) => {
    imgElement.src = event.target.dataset.img;
  })
})