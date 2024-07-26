document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.shadow-effect');

  elements.forEach(element => {
      // For touch devices, mimic hover effect
      element.addEventListener('touchstart', () => {
          element.classList.add('active');
      });

      element.addEventListener('touchend', () => {
          element.classList.remove('active');
      });

      // Optional: Remove the effect if touch moves away from the element
      element.addEventListener('touchmove', () => {
          element.classList.remove('active');
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