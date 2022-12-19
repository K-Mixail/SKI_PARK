// для смены изображения в блоке с услугами на главной странице
const slides = document.querySelectorAll('input[data-slide]');
const imgElement = document.querySelector('#img');

slides.forEach(function(slide) {
  slide.addEventListener('change', (event) => {
    imgElement.src = event.target.dataset.img;
  })
})


// календарь (в аренде жилья)
document.getElementById('davaToday').valueAsDate = new Date();