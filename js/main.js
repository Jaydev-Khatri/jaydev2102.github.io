document.addEventListener('DOMContentLoaded', () => {
  const shadowEffects = document.querySelectorAll('.shadow-effect');

  shadowEffects.forEach(shadowEffect => {
      // For touch devices, mimic hover effect
      shadowEffect.addEventListener('touchstart', () => {
          shadowEffect.classList.add('active');
      });

      shadowEffect.addEventListener('touchend', () => {
          shadowEffect.classList.remove('active');
      });

      shadowEffect.addEventListener('touchmove', () => {
          shadowEffect.classList.remove('active');
      });
  });

  const linkCustoms = document.querySelectorAll('.link-custom');

  linkCustoms.forEach(linkCustom => {
      linkCustom.addEventListener('touchstart', () => {
          linkCustom.classList.add('linkCustomsactive');
      });

      linkCustom.addEventListener('touchend', () => {
          linkCustom.classList.remove('linkCustomsactive');
      });

      linkCustom.addEventListener('touchmove', () => {
          linkCustom.classList.remove('linkCustomsactive');
      });
  });
});


AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});