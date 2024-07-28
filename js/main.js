AOS.init();
AOS.init({
  offset: 120,
  delay: 0,
  duration: 700,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

document.addEventListener('DOMContentLoaded', () => {
  // Function to add and remove active class for touch events
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', function () {
    this.classList.toggle('active');
  });
  const addTouchEvents = (elements, activeClass) => {
    elements.forEach((element) => {
      element.addEventListener('touchstart', () => {
        element.classList.add(activeClass);
      });

      element.addEventListener('touchend', () => {
        element.classList.remove(activeClass);
      });

      element.addEventListener('touchmove', () => {
        element.classList.remove(activeClass);
      });
    });
  };

  // Apply touch event handling for .shadow-box elements
  const shadowEffects = document.querySelectorAll('.shadow-box');
  addTouchEvents(shadowEffects, 'active');

  // Apply touch event handling for .styled-link elements
  const linkCustoms = document.querySelectorAll('.styled-link');
  addTouchEvents(linkCustoms, 'linkCustomsactive');
});
