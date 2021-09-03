window.addEventListener('load', function () {
  // control hide/show of sidebar items
  document.querySelectorAll(".menu__item button").forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      button.parentNode.classList.toggle("menu__item--open");
    });
  });

  // control collaps-in and collapse-out sidebar menu
  document.querySelector(".menu__toggle-btn").addEventListener("click" , function (e) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle("menu__collapse");
    document.querySelector(".container").classList.toggle("container__with_sb");
  });
  
}, false);