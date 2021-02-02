const navSlide = () => {
  const burgur = document.querySelector('#navbar .burgur-manue');
  const navItems = document.querySelector('#navbar .nav-links');

  burgur.addEventListener(click, () => {
    navItems.classList.toggle('nav-active');
  });
};
navSlide();
