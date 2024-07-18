let sliderOffset = 0;
const heroSliderWrapperElem = document.querySelector('.slider-wrapper');

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth) {
    heroSliderWrapperElem.style.left = 0;
  }
}

const nextBtnElem = document
  .querySelector('.next-slider')
  .addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && screenWidth < 1280) {
      sliderOffset += 292;
      if (sliderOffset > 584) {
        sliderOffset = 0;
      }
      heroSliderWrapperElem.style.left = -sliderOffset + 'px';
    } else {
      sliderOffset += 528;
      if (sliderOffset > 1056) {
        sliderOffset = 0;
      }
      heroSliderWrapperElem.style.left = -sliderOffset + 'px';
    }
  });

const nextPrevElem = document
  .querySelector('.prev-slider')
  .addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && screenWidth < 1280) {
      sliderOffset -= 292;
      if (sliderOffset < 0) {
        sliderOffset = 584;
      }
      heroSliderWrapperElem.style.left = -sliderOffset + 'px';
    } else {
      sliderOffset -= 528;
      if (sliderOffset < 0) {
        sliderOffset = 1056;
      }
      heroSliderWrapperElem.style.left = -sliderOffset + 'px';
    }
  });
