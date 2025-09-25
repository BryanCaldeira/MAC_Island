const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('btn-close');
const navMenu = document.querySelector('.nav_menu');

menuBtn.addEventListener('click', function () {
  navMenu.classList.add('open');
});

closeBtn.addEventListener('click', function () {
  navMenu.classList.remove('open');
});
