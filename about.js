// Simple slideshow for co-founders
let slideIndex = 0;
const showSlides = () => {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.dots');
  if (!slides.length) return;

  slides.forEach(s => s.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = 'block';

  // update dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      if (i === slideIndex-1) btn.classList.add('active');
      btn.addEventListener('click', () => {
        slideIndex = i; // will be incremented in next cycle, so set to i
        showSlidesImmediate(i+1);
      });
      dotsContainer.appendChild(btn);
    });
  }

  // autoplay every 5s
  clearTimeout(window._aboutSlideTimeout);
  window._aboutSlideTimeout = setTimeout(showSlides, 5000);
};

const showSlidesImmediate = (n) => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(s => s.style.display = 'none');
  const idx = (n-1 + slides.length) % slides.length;
  slides[idx].style.display = 'block';
  slideIndex = idx+1;
  const dots = document.querySelectorAll('.dots button');
  dots.forEach((d,i)=> d.classList.toggle('active', i===idx));
  clearTimeout(window._aboutSlideTimeout);
  window._aboutSlideTimeout = setTimeout(showSlides, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  if (prev && next) {
    prev.addEventListener('click', () => {
      // go to previous
      const slides = document.querySelectorAll('.slide');
      slideIndex = slideIndex - 2; // because showSlides will increment
      if (slideIndex < 0) slideIndex = slides.length - 1;
      showSlidesImmediate(slideIndex + 1);
    });
    next.addEventListener('click', () => {
      // go to next
      showSlidesImmediate(((slideIndex % document.querySelectorAll('.slide').length) + 1));
    });
  }

  // make stakeholder images keyboard accessible
  document.querySelectorAll('.stakeholder img').forEach(img => {
    img.setAttribute('tabindex', '0');
  });
});