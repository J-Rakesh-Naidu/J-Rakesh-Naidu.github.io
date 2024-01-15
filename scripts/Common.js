//Nav-bar to open and close when clicked on hamburger icon

document.addEventListener("DOMContentLoaded", function (event) {
  var navbar = document.querySelector(".navbar");
  var navlinks = document.querySelector(".nav-links");
  navbar.addEventListener("click", function () {
    navbar.classList.toggle("clicked");
    navlinks.classList.toggle("open");
  });
});
